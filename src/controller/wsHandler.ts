import { move } from './mouse';

export async function wsHandler(cli: string) {
  const parameters = cli.split(' ');
  const cmd = parameters[0];
  const distance = Number(parameters[1]);
  if(cmd.startsWith('mouse')) {
    await move(cmd, distance);
  }
}