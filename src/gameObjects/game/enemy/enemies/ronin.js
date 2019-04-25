import * as actionType from '../../../../state/actions';

export const ronin = [
  [actionType.SWEEP, actionType.ATTACK_TOP, actionType.IMPALE],
  [actionType.ATTACK_DOWN, actionType.IMPALE, actionType.ATTACK_TOP, actionType.IMPALE],
  [actionType.ATTACK_CENTER, actionType.ATTACK_TOP, actionType.ATTACK_CENTER, actionType.ATTACK_CENTER],
  [actionType.IMPALE, actionType.ATTACK_TOP, actionType.SWEEP, actionType.ATTACK_CENTER]
]

export const roninStats = {
  enemyName: 'Ronin',
  maxHealth: 70,
  maxPosture: 80,
  requiredFinishers: 1,
  basePostureRegeneration: 5,
  attackDamage: 10,
  impaleDamage: 25,
  sweepDamage: 20,
  isPostureBroken: false,
  isAlive: true
}
