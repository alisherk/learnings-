function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    const padding = ' '.repeat(i - 1);
    const hashes = '#'.repeat(i * 2 - 1);
    console.log(hashes);
  }
}

pyramid(2);
