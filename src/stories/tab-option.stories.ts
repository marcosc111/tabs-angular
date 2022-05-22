// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { TabOptionComponent } from '../app/components/tab-option.component';

export default {
  title: 'tabs/tab-option',
  component: TabOptionComponent,
  argTypes: {
    
  },
} as Meta;

const Template: Story<TabOptionComponent> = (args: TabOptionComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selecionado: false,
  tabId: "default"
};

export const TextoGrande = Template.bind({});
TextoGrande.args = {
  selecionado: false,
  tabId: "texto muito maior do que o default"
};

export const SemTexto = Template.bind({});
SemTexto.args = {
  selecionado: false,
  tabId: ""
};