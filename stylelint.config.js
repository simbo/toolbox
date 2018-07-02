rxSlug = `[a-z][a-z0-9]*`;
rxKebab = `${rxSlug}(-${rxSlug})*`;
rxBem = `${rxKebab}(__${rxKebab})?(--${rxKebab})?`;

const config = {
  extends: [
    'stylelint-config-recommended'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {

    // @ rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // formatting
    'indentation': 2,

    // naming conventions
    'custom-media-pattern': `^${rxBem}$`,
    'custom-property-pattern': `^${rxKebab}$`,
    'keyframes-name-pattern': `^${rxBem}$`,
    'selector-class-pattern': `^\.${rxBem}$`,
    'selector-id-pattern': `^#${rxBem}$`,
    'scss/at-function-pattern': `^(${rxKebab})|_$`,
    'scss/at-mixin-pattern': `^${rxBem}$`,
    'scss/dollar-variable-pattern': `^${rxKebab}$`,

    // selectors
    'no-descending-specificity': null,

  }
};

module.exports = config;
