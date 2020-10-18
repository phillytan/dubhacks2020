

export function probability(rating1: number, rating2: number): number {
  return 1.0 * 1.0 / (1 + 1.0 * Math.pow(10, 1.0 * (rating1 - rating2) / 400))
}