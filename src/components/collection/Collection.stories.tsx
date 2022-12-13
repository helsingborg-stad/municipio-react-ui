import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../button/Button'
import { Icon } from '../icon/Icon'
import { Typography } from '../typography/Typography'

import {
  Collection,
  CollectionItem,
  CollectionContent,
  CollectionIcon,
  CollectionSecondary,
} from './Collection'

export default {
  title: 'Components/Collection',
  component: Collection,

  argTypes: {},
} as ComponentMeta<typeof Collection>

export const PlainText: ComponentStory<typeof Collection> = (args) => (
  <Collection {...args}>
    <CollectionItem>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
  </Collection>
)

export const Multiline: ComponentStory<typeof Collection> = (args) => (
  <Collection {...args}>
    <CollectionItem href='#'>
      <CollectionContent>
        <Typography variant='h4'>Multiline link</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </Typography>
      </CollectionContent>
    </CollectionItem>
    <CollectionItem href='#'>
      <CollectionContent>
        <Typography variant='h4'>Multiline link</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </Typography>
      </CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionContent>
        <Typography variant='h4'>Multiline item</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </Typography>
      </CollectionContent>
    </CollectionItem>
  </Collection>
)

export const Linked: ComponentStory<typeof Collection> = (args) => (
  <Collection {...args}>
    <CollectionItem href='#'>
      <CollectionContent>Linked Collection item</CollectionContent>
    </CollectionItem>
    <CollectionItem href='#'>
      <CollectionContent>Linked Collection item</CollectionContent>
    </CollectionItem>
    <CollectionItem href='#'>
      <CollectionContent>Linked Collection item</CollectionContent>
    </CollectionItem>
    <CollectionItem href='#'>
      <CollectionContent>Linked Collection item</CollectionContent>
    </CollectionItem>
  </Collection>
)

export const WithIcon: ComponentStory<typeof Collection> = (args) => (
  <Collection {...args}>
    <CollectionItem href='#'>
      <CollectionIcon>
        <Icon name='diamond' />
      </CollectionIcon>
      <CollectionContent>Linked Collection item</CollectionContent>
    </CollectionItem>
    <CollectionItem href='#'>
      <CollectionIcon>
        <Icon name='diamond' />
      </CollectionIcon>
      <CollectionContent>Linked Collection item</CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='location_on' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='phone' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='mail' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
    </CollectionItem>
  </Collection>
)

export const WithSecondary: ComponentStory<typeof Collection> = (args) => (
  <Collection {...args}>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='phone' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
      <CollectionSecondary>
        <Button color='primary' variant='basic' size='sm'>
          <Icon name='delete' />
        </Button>
      </CollectionSecondary>
    </CollectionItem>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='mail' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
      <CollectionSecondary>
        <Button color='primary' variant='basic' size='sm'>
          <Icon name='edit' />
        </Button>
      </CollectionSecondary>
    </CollectionItem>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='location_on' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
      <CollectionSecondary>
        <Button color='primary' variant='basic' size='sm'>
          <Icon name='star' />
        </Button>
      </CollectionSecondary>
    </CollectionItem>
    <CollectionItem>
      <CollectionIcon>
        <Icon name='account_circle ' />
      </CollectionIcon>
      <CollectionContent>Collection item with plain text</CollectionContent>
      <CollectionSecondary>
        <Typography variant='meta'>Secondary</Typography>
      </CollectionSecondary>
    </CollectionItem>
  </Collection>
)
