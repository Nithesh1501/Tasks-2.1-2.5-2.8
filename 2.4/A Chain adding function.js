// Let the currying begin!
  var add = function(n) {
  const f = x => add(n + x)
  f.valueOf = () => n
  return f;
}
