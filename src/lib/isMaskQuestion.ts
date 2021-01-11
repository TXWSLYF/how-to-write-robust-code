type Question = {
  readonly template: {
    readonly bundleName: string;
  };
};

const MASK_BUNDLE_NAMES = ['maskChoiceQuestion', 'maskAudioQuestion'];

export const isMaskQuestion = (ext: string): boolean => {
  // 运行时校验
  if (typeof ext !== 'string') return false;

  // JSON.parse 可能会抛出错误
  try {
    const question: Question = JSON.parse(ext);

    if (!question || !question.template || !question.template.bundleName)
      return false;

    return !!MASK_BUNDLE_NAMES.find(
      (name) => name === question.template.bundleName
    );
  } catch {
    return false;
  }
};
