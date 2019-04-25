import * as actionType from '../../../../state/actions';

export const samurai = [
  [actionType.ATTACK_TOP, actionType.ATTACK_TOP, actionType.ATTACK_DOWN],
  [actionType.ATTACK_CENTER, actionType.IMPALE, actionType.ATTACK_TOP, actionType.ATTACK_TOP, actionType.ATTACK_DOWN],
  [actionType.ATTACK_DOWN, actionType.ATTACK_TOP, actionType.ATTACK_CENTER, actionType.ATTACK_CENTER]
]

export const samuraiStats = {
  enemyName: 'Samurai',
  maxHealth: 100,
  maxPosture: 100,
  requiredFinishers: 1,
  basePostureRegeneration: 8,
  attackDamage: 8,
  impaleDamage: 15,
  sweepDamage: 12,
  isPostureBroken: false,
  isAlive: true
}
