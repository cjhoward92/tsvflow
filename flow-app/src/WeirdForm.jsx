// @flow
import React from 'react';

import {
  FormHelper,
  // SomethingLikeFormHelper,
  occupations,
} from './FormHelper';

import type { OccupationType } from './FormHelper';

type Props = {
  initialName: string,
};

type State = {
  name: string,
  occupation: OccupationType,
  daysOff: number
};

class WeirdForm extends React.Component<Props, State> {
  // We need these or the class properties throw errors!
  onSave: Function;
  onNameChanged: Function;
  onDaysOffChanged: Function;
  onOccupationSelected: Function;

  constructor(props: Props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onDaysOffChanged = this.onDaysOffChanged.bind(this);
    this.onOccupationSelected = this.onOccupationSelected.bind(this);
    this.state = {
      name: props.initialName,
      occupation: occupations.DEVELOPER,
      daysOff: 0,
    };
  }

  onNameChanged(e: Event) {
    const target: HTMLInputElement = (e.target: window.HTMLInputElement);
    this.setState({ name: target.value });
  }

  onDaysOffChanged(e: Event) {
    const target: HTMLInputElement = (e.target: window.HTMLInputElement);
    this.setState({ daysOff: parseInt(target.value, 10) });
  }

  onOccupationSelected(e: Event) {
    const target: HTMLSelectElement = (e.target: window.HTMLSelectElement);

    // Is there a better way?
    switch (target.value) {
      case occupations.DEVELOPER:
        this.setState({ occupation: occupations.DEVELOPER });
        break;
      case occupations.ASSISANT:
        this.setState({ occupation: occupations.ASSISANT });
        break;
      case occupations.PLUMBER:
        this.setState({ occupation: occupations.PLUMBER });
        break;
    }
  }

  onSave(helper: FormHelper) {
    const {
      name,
      occupation,
      daysOff,
    }: State = this.state;

    helper.save(name, occupation, daysOff);
    this.setState({ name: '', occupation: occupations.DEVELOPER, daysOff: 0 });
  }

  render() {
    const {
      name,
      occupation,
      daysOff,
    }: State = this.state;

    return (
      <div>
        <form>
          <div>
            <label htmlFor='name'>
              Name
              <input
                type='text'
                name='name'
                value={name}
                onChange={this.onNameChanged}
              />
            </label>
          </div>
          <div>
            <label htmlFor='occupation'>
              Occupation
              <select name='occupation' defaultValue={occupation} onChange={this.onOccupationSelected}>
                <option
                  value={occupations.DEVELOPER}
                >
                  Developer
                </option>
                <option
                  value={occupations.PLUMBER}
                >
                  Plumber
                </option>
                <option
                  value={occupations.ASSISANT}
                >
                  Assistant
                </option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor='daysOff'>
              Days Off
              <input
                type='number'
                name='daysOff'
                value={daysOff}
                onChange={this.onDaysOffChanged}
              />
            </label>
          </div>
          <div>
            <button
              type='submit'
              onClick={(e: Event) => {
                e.preventDefault();
                // Classes are nominally typed in Flow, so only FormHelper works here.
                this.onSave(new FormHelper());
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default WeirdForm;
