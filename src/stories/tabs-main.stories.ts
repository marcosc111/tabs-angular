// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { TabOptionComponent } from '../app/components/tab-option.component';
import { TabContentComponent } from '../app/components/tab-content.component';
import { TabsMainComponent } from '../app/components/tabs-main.component';

export default {
  title: 'tabs/tabs-main',
  component: TabsMainComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabOptionComponent, TabContentComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {

  },
} as Meta;

const Template: Story<TabsMainComponent> = (args: TabsMainComponent) => ({
  props: args,
});

export const DuasOpcoes = Template.bind({});
DuasOpcoes.args = {
  titulo: 'Duas opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
  ],
};

export const TresOpcoes = Template.bind({});
TresOpcoes.args = {
  titulo: 'Três opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
    {
      tabId: 'Tab 3',
      tabContent: 'Terceiro conteúdo'
    },
  ],
};

export const QuatroOpcoes = Template.bind({});
QuatroOpcoes.args = {
  titulo: 'Quatro opções',
  tabsData: [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
    {
      tabId: 'Tab 3',
      tabContent: 'Terceiro conteúdo'
    },
    {
      tabId: 'Tab 4',
      tabContent: 'Quarta página'
    }
  ],
};
