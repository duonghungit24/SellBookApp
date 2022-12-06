import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { color } from "../../theme"
import { IncreaseOrDecrease } from "./increase-or-decrease"

storiesOf("IncreaseOrDecrease", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <IncreaseOrDecrease style={{ backgroundColor: color.error }} />
      </UseCase>
    </Story>
  ))
