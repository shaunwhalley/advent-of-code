const intcode = ({ program, overrides = [] }) => {
  const memory = program.split(',').map((n) => Number(n))
  overrides.map(([position, value]) => (memory[position] = value))

  for (a = 0; a <= memory.length; a += 4) {
    const opcode = memory[a]

    if (opcode === 99) break

    const p1 = memory[memory[a + 1]],
      p2 = memory[memory[a + 2]],
      p3 = memory[a + 3]

    if (opcode === 1) memory[p3] = p1 + p2
    else if (opcode === 2) memory[p3] = p1 * p2
  }

  return memory
}

module.exports = intcode
