const codeText = document.getElementById('codeText') as HTMLTextAreaElement;

function codeTextUpdate() {
  const texto = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

    const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

    const unfold = (f, seed) => {
      const go = (f, seed, acc) => {
        const res = f(seed)
        return res ? go(f, res[1], acc.concat([res[0]])) : acc
      }
      return go(f, seed, [])
    }`;
  

  codeText.value = texto;
}

export default codeTextUpdate;
