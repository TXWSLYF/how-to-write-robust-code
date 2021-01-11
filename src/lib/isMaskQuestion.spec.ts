import test from 'ava';

import { isMaskQuestion } from './isMaskQuestion';

const extWithOutTemplate = '{}';
const selectQuestionExt = '{"template":{"bundleName":"selectQuestion"}}';
const maskAudioQuestionExt = '{"template":{"bundleName":"maskAudioQuestion"}}';
const maskChoiceQuestionExt =
  '{"template":{"bundleName":"maskChoiceQuestion"}}';

test('isMaskQuestion', (t) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  t.is(isMaskQuestion(undefined), false);

  t.is(isMaskQuestion('sss'), false);

  t.is(isMaskQuestion(extWithOutTemplate), false);

  t.is(isMaskQuestion(selectQuestionExt), false);

  t.is(isMaskQuestion(maskAudioQuestionExt), true);

  t.is(isMaskQuestion(maskChoiceQuestionExt), true);
});
