import * as React from 'react';

import {
  FormHelper,
  SomethingLikeFormHelper,
  occupations,
  OccupationType,
  isOccupationType,
} from './FormHelper';

type Props = {
  initialName: string;
};

type State = {
  name: string;
  occupation: OccupationType;
  daysOff: number;
};

class WeirdForm extends React.Component<Props, State> {
  // No need for the weird function declarations.
  constructor(props: Props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onDaysOffChanged = this.onDaysOffChanged.bind(this);
    this.onOccupationSelected = this.onOccupationSelected.bind(this);
    this.state = {
      name: props.initialName,
      occupation: occupations.DEVELOPER as OccupationType,
      daysOff: 0,
    };
  }

  onNameChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }

  onDaysOffChanged(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ daysOff: parseInt(e.target.value, 10) });
  }

  onOccupationSelected(e: React.ChangeEvent<HTMLSelectElement>) {
    if (!isOccupationType(e.target.value)) {
      return;
    }

    this.setState({ occupation: e.target.value });
  }

  onSave(helper: FormHelper) {
    const {
      name,
      occupation,
      daysOff,
    } = this.state;

    helper.save(name, occupation, daysOff);
    this.setState({
      name: '',
      occupation: occupations.DEVELOPER as OccupationType,
      daysOff: 0
    });
  }

  render() {
    const {
      name,
      occupation,
      daysOff,
    } = this.state;

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
              onClick={(e) => {
                e.preventDefault();
                // Classes are structurally typed in TypeScript.
                this.onSave(new SomethingLikeFormHelper());
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
