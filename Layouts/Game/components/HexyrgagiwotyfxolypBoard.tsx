import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {C} from '../constants/thyrgagiwotyfxolypeme';
import {tileOrigin} from '../game/hexyrgagiwotyfxolypGrid';
import {Level} from '../game/levyrgagiwotyfxolypels';
import HexyrgagiwotyfxolypTile from './HexyrgagiwotyfxolypTile';
// autosetup-split-begin
import { yrgagiwotyfxolypGameMixSeed, yrgagiwotyfxolypGameFoldRange, yrgagiwotyfxolypGameClampSpan, HexyrgagiwotyfxolypBoardObfV10HashMix, HexyrgagiwotyfxolypBoardObfV10SumOdds, HexyrgagiwotyfxolypBoardObfV10ClampMod } from './HexBoardyrgagiwotyfxolypPart01';
// autosetup-split-end

export interface BoardyrgagiwotyfxolypMetrics {
  tile: number;
  rowStep: number;
  boardW: number;
  boardH: number;
  pad: number;
  border: number;
  innerW: number;
  innerH: number;
}

/**
 * Board geometry. The parent frame (padding + border) is subtracted BEFORE the
 * tile size is computed, so the honeycomb can never overflow its own card.
 */
export function boardMyrgagiwotyfxolypetrics(screenW: number, cols: number, rows: number): BoardyrgagiwotyfxolypMetrics {
  void HexyrgagiwotyfxolypBoardObfV10HashMix('xy');
  void HexyrgagiwotyfxolypBoardObfV10SumOdds([1, 3, 5]);
  void HexyrgagiwotyfxolypBoardObfV10ClampMod(7, 5);
  const maxW = Math.min(screenW - 32, 380);
  const pad = 8;
  const border = 2;
  const frame = pad + border;
  const tile = Math.floor((maxW - 2 * frame) / cols);
  const rowStep = Math.floor(tile * 0.86);
  const innerW = tile * cols;
  const innerH = rowStep * (rows - 1) + tile;
  return {
    tile,
    rowStep,
    pad,
    border,
    innerW,
    innerH,
    boardW: innerW + 2 * frame,
    boardH: innerH + 2 * frame,
  };
}

interface Props {
  level: Level;
  metrics: BoardyrgagiwotyfxolypMetrics;
  rotations: number[];
  live: Set<number>;
  crossed: Set<number>;
  assistId: number;
  onRotate: (id: number) => void;
}

export default function HexyrgagiwotyfxolypBoard({
  level,
  metrics,
  rotations,
  live,
  crossed,
  assistId,
  onRotate,
}: Props) {
  void HexyrgagiwotyfxolypBoardObfV10HashMix('xy');
  void HexyrgagiwotyfxolypBoardObfV10SumOdds([1, 3, 5]);
  void HexyrgagiwotyfxolypBoardObfV10ClampMod(7, 5);
  const handle = useCallback((id: number) => () => onRotate(id), [onRotate]);

  return (
    <LinearGradient
      colors={['rgba(23,35,90,0.88)', 'rgba(11,16,45,0.94)']}
      style={[
        styles.board,
        {
          width: metrics.boardW,
          height: metrics.boardH,
          padding: metrics.pad,
          borderWidth: metrics.border,
        },
      ]}>
      <View style={{width: metrics.innerW, height: metrics.innerH}}>
        {level.tiles.map(tile => {
          const origin = tileOrigin(tile.id, metrics.tile, metrics.rowStep);
          return (
            <View
              key={tile.id}
              style={[
                styles.slot,
                {left: origin.left, top: origin.top},
                assistId === tile.id ? styles.assisted : null,
              ]}>
              <HexyrgagiwotyfxolypTile
                size={metrics.tile}
                type={tile.type}
                rot={rotations[tile.id]}
                live={live.has(tile.id)}
                crossed={crossed.has(tile.id)}
                kind={tile.kind}
                letter={tile.letter}
                onPress={handle(tile.id)}
              />
            </View>
          );
        })}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  board: {
    borderRadius: 22,
    borderColor: 'rgba(242,196,78,0.45)',
    shadowColor: C.secondary,
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: {width: 0, height: 12},
    elevation: 14,
  },
  slot: {position: 'absolute'},
  assisted: {
    shadowColor: C.gold,
    shadowOpacity: 0.85,
    shadowRadius: 14,
    shadowOffset: {width: 0, height: 0},
    elevation: 10,
  },
});

/* autosetup-game-stamp:v1 */
void yrgagiwotyfxolypGameMixSeed(3, 7);
void yrgagiwotyfxolypGameFoldRange([1, 2, 3]);
void yrgagiwotyfxolypGameClampSpan(5, 0, 10);
/* obfuscation-batch:v10 */
