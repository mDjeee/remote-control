import { Button, mouse } from '@nut-tree/nut-js';
import { drawCircle, drawRectangle, drawSquare } from './draw';
import { move } from './mouse';
import { printScr } from './printScr';

export async function wsHandler(cli: string) {
  const parameters = cli.split(' ');
  const cmd = parameters[0];
  if(cmd.startsWith('mouse')) {
    const distance = Number(parameters[1]);
    return await move(cmd, distance);
  } else if (cmd.startsWith('draw')) {
    await mouse.pressButton(Button.LEFT);
    const width = Number(parameters[1]);
    switch (cmd) {
      case 'draw_rectangle':
        const length = Number(parameters[2]);
        await drawRectangle(width, length);
        break;
      case 'draw_square':
        await drawSquare(width);
        break;
      case 'draw_circle':
        drawCircle(width)
        break;
      default:
        break;
    }
    await mouse.releaseButton(Button.LEFT);
    return cmd;
  } else if (cmd.startsWith('prnt_scrn')) {
    const imgData = await printScr();
    const res = `${cmd} ${imgData}`
    return res;
  }
}