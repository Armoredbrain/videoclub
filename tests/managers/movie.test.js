const { removeDuplicateTitle } = require('../../managers/movie');

const objectArray = [
  {
    titre: 'Soul',
  },
  {
    titre: 'Soul',
  },
  {
    titre: 'Vice-Versa',
  },
  {
    titre: 'Kudo',
  },
];

describe('remove movie duplicate function', () => {
  it('should remove objects with same titre value', () => {
    const unique = removeDuplicateTitle(objectArray);
    const expectedResult = [
      {
        titre: 'Soul',
      },
      {
        titre: 'Vice-Versa',
      },
      {
        titre: 'Kudo',
      },
    ];
    expect(unique).toEqual(expectedResult);
  });
});
