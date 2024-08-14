import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../Components/CountDown';
import { RoundedButton } from '../Components/RoundedButton';
import { spacings } from '../utilities/sizes';
import { fontSizes, colors } from '../utilities/colors';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!started}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: spacings.xxlarge }}>
          <Text style={styles.title}>Focussing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{ paddingTop: spacings.small }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacings.small }}
        />
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!started && (
          <RoundedButton title="Start" onPress={() => setStarted(true)} />
        )}

        {started && (
          <RoundedButton title="Pause" onPress={() => setStarted(false)} />
        )}
      </View>

      <View style={styles.clearWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  countDown: {
    flex: 0.5,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },

  timingWrapper: {
    flex: 0.1,
    alignItems: 'center',
    paddingTop: spacings.large,
    flexDirection: 'row',
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacings.large,
    justifyContent: 'center',
    alignItems: 'center',
  },

  clearWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
