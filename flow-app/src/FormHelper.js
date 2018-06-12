// @flow

export const occupations = {
  DEVELOPER: 'DEVELOPER',
  PLUMBER: 'PLUMBER',
  ASSISANT: 'ASSISANT',
};

// export type OccupationType = 'DEVELOPER' | 'PLUMBER' | 'ASSISTANT';
export type OccupationType = $Keys<typeof occupations>;

export class SomethingLikeFormHelper {
  // eslint-disable-next-line
  save(name: string, occupation: OccupationType, daysOff: number) {
    // do something with the values
  }
}

export class FormHelper {
  // eslint-disable-next-line
  save(name: string, occupation: OccupationType, daysOff: number) {
    // do something with the values
    console.log('This is the form helper');
  }
}
