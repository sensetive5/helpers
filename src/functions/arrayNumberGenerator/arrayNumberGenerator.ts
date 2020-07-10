interface Number {
  to: (end: number) => number[];
}

Number.prototype.to = function(end) {
    const start = Number(this);
    const length = end - start;

    return Array
      .from({ length }, (_, i) => i + start)
      .concat(end);
}
