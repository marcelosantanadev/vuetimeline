<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
  article(:class=`["gb-vue-timeline-update", "gb-vue-timeline-update--" + computedTheme, "js-vue-timeline-update", { "gb-vue-timeline-update--is-last": isLast }]`)
    .gb-vue-timeline-update__left
      div(class="gb-vue-timeline-update__ago" v-if="$slots.left")
        slot(name="left")

    .gb-vue-timeline-update__center
      span.gb-vue-timeline-update__bullet
        span(:class=`["gb-vue-timeline-update__ago"]` :style="getBackgroundColor") {{ ago }}
      span.gb-vue-timeline-update__line

    div(@click="onContentClick" :class=`["gb-vue-timeline-update__right",{ "gb-vue-timeline-update__right--clickable": $listeners.click }]`)
      div(v-if="$slots.default" class="gb-vue-timeline-update__slot")
        slot(name="default")
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
  // NPM
  // PROJECT: MIXINS
  import ThemeMixin from "../mixins/ThemeMixin.js"

  export default {
    mixins: [ThemeMixin],

    props: {
      animation: {
        type: Boolean,
        default: true
      },
      animationContainer: {
        type: String,
        default: null
      },
      animationDuration: {
        type: Number,
        default: 1500
      },
      backgroundColor: {
        type: String,
        default: "#30ca91",
        required: true
      },
      fontColor: {
        type: String,
        default: "#000000",
        required: true
      },
      dateString: {
        type: String,
        default: null
      },
      isLast: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      ago() {
        return this.dateString
      },
      getBackgroundColor() {
        return {
          background: this.backgroundColor,
          color: this.fontColor
        }
      },
    },

    mounted() {
      if (this.animation) {
        const ScrollReveal = require("scrollreveal").default

        ScrollReveal().reveal(this.$el, {
          container: this.animationContainer,
          duration: this.animationDuration
        })
      }
    },

    methods: {
      // --> EVENT LISTENERS <--

      onContentClick(event) {
        this.$emit("click", event)
      }
    }
  }
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
  // IMPORTS
  @import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
  @import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
  @import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
  @import "node_modules/@growthbunker/stylesheets/tools/_mq.scss";

  // VARIABLES
  $c: ".gb-vue-timeline-update";

  #{$c} {
    display: flex;
    overflow: hidden;
    text-align: left;
    font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;

    a {
      text-decoration: underline;
    }

    #{$c}__left,
    #{$c}__right  {
      #{$c}__ago {
        font-size: 14px;
        user-select: none;
      }
    }

    #{$c}__left {
      display: none;
    }

    #{$c}__center {
      position: relative;
      flex: 0 0 auto;
      margin-right: 65px;
      margin-left: 55px;

      #{$c}__bullet {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      #{$c}__line {
        display: inline-block;
        margin-top: 50px;
        width: 1px;
        height: 100%;
      }
    }

    #{$c}__right {
      flex: 1;
      padding-bottom: 40px;
      width: 100%;

      #{$c}__title,
      #{$c}__description {
        font-size: 16px;
        line-height: 26px;
      }

      #{$c}__information {
        display: flex;
        flex-direction: column;
        margin-top: 4px;

        #{$c}__meta {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          #{$c}__category {
            align-self: flex-start;
            flex: 0 0 auto;
            margin-right: 10px;
          }

          #{$c}__ago {
            line-height: 24px; // Size of the category to align horizontally
          }
        }

        #{$c}__title {
          flex: 1;
          margin: 0 0 4px;
          text-transform: uppercase;
          font-weight: bold;

          &--clickable {
            cursor: pointer;
          }
        }
      }

      #{$c}__description {
        margin: 0;
      }

      #{$c}__thumbnail {
        box-sizing: border-box;
        margin: 6px 0 12px;
        max-width: 100%;
        border-width: 1px;
        border-style: solid;
        border-radius: 6px;
        transition: all 250ms linear;
        user-select: none;

        &--clickable {
          cursor: pointer;
        }
      }

      &--clickable {
        cursor: pointer;
      }
    }

    // --> BOOLEANS <--

    &--is-last {
      #{$c}__right {
        padding-bottom: 20px;
      }
    }

    // --> THEMES <--

    @each $theme in $themes {
      $themeName: map-get($theme, "name");

      &--#{$themeName} {
        color: mdg($theme, "fonts", "default", "primary");

        a {
          color: mdg($theme, "fonts", "default", "primary");
        }

        #{$c}__left,
        #{$c}__right  {
          #{$c}__ago {
            color: mdg($theme, "fonts", "default", "secondary");
          }
        }

        #{$c}__center {
          #{$c}__bullet {
            border-radius: 30px;
            margin-top: 5px;
            border: 1px dashed #afafaf;
            color: white;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            padding: 3px;

            #{$c}__ago {
              padding: 8px;
              border-radius: 15px;
              min-width: 35px;
              min-height: 35px;
            }
          }

          #{$c}__line {
            border-right: 1px dashed #afafaf;
          }
        }

        #{$c}__right {
          #{$c}__information {
            #{$c}__meta {
              #{$c}__category {
                box-shadow: 0 1px 5px 0 mdg($theme, "shadows", "default", "primary");
              }
            }
          }

          #{$c}__thumbnail {
            border-color: mdg($theme, "borders", "reverse", "primary");
            box-shadow: 0 1px 5px 0 mdg($theme, "shadows", "default", "primary");
          }

          #{$c}__description {
            color: mdg($theme, "fonts", "default", "secondary");
          }
        }

        // --> BOOLEANS <--
        &#{$c}--is-last {
          #{$c}__center {
            #{$c}__line {
              border: none !important;
            }
          }
        }
      }
    }
  }

  // --> BREAKPOINT: TABLET <--

  @include mq($from: tablet) {
    #{$c} {
      #{$c}__left {
        display: block;
        flex: 0 0 auto;
        width: 50px;
        text-align: right;

        #{$c}__ago {
          display: inline-block;
          line-height: 32px; // Size of the badge to align horizontally
        }
      }

      #{$c}__center {
        margin-right: 65px;
        margin-left: 65px;
      }

      #{$c}__right {
        #{$c}__title,
        #{$c}__description {
          font-size: 18px;
          line-height: 28px;
        }

        #{$c}__information {
          flex-direction: row;

          #{$c}__meta {
            #{$c}__ago {
              display: none;
            }
          }

          #{$c}__title {
            margin-bottom: 8px;
          }
        }

        #{$c}__thumbnail {
          margin: 8px 0 16px;
        }
      }
    }
  }
</style>
