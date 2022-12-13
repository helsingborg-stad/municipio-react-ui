import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typography } from '../typography/Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>

export const Headings: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant='h1'>Heading 1</Typography>
    <Typography variant='h2'>Heading 2</Typography>
    <Typography variant='h3'>Heading 3</Typography>
    <Typography variant='h4'>Heading 4</Typography>
    <Typography variant='h5'>Heading 5</Typography>
    <Typography variant='h6'>Heading 6</Typography>
  </>
)

export const Paragraph: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant='p'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
    <Typography variant='p'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
  </>
)

export const Meta: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant='meta'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </>
)

export const Caption: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant='caption'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
  </>
)
