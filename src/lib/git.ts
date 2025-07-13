
import degit, { type Info } from 'degit';


export const clone = async (
  repo: string, 
  dest: string,
  onInfo?: (info: Info) => void,  
) => {
  const emitter = degit(repo, {
    cache: true,
    force: true,
    verbose: true,
  });

  if (onInfo) {
    emitter.on('info', onInfo);
    emitter.on('warn', onInfo);
  }

  return emitter.clone(dest);
}