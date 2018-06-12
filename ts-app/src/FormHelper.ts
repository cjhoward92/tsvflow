export const occupations = {
  DEVELOPER: 'DEVELOPER',
  PLUMBER: 'PLUMBER',
  ASSISANT: 'ASSISANT',
};

// export type OccupationType = 'DEVELOPER' | 'PLUMBER' | 'ASSISTANT';
export type OccupationType = keyof typeof occupations;

export const isOccupationType = (o: string): o is OccupationType => {
  return occupations.hasOwnProperty(o);
}

export class SomethingLikeFormHelper {
  // eslint-disable-next-line
  save(name: string, occupation: OccupationType, daysOff: number) {
    // do something with the values
    console.log('This is something like the form helper');
  }
}

export class FormHelper {
  // eslint-disable-next-line
  save(name: string, occupation: OccupationType, daysOff: number) {
    // do something with the values
    console.log('This is the form helper');
  }
}
