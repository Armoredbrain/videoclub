const { removeDuplicateTitle } = require('./movie');

const objectArray = [
  {
    titre: 'Soul',
    auteur: '',
    editeur: 'Disney',
  },
  {
    titre: 'Soul',
    auteur: '',
    editeur: 'Disney',
  },
  {
    titre: 'Vice-Versa',
    auteur: '',
    editeur: 'Pixar',
  },
  {
    titre: 'Kudo',
    auteur: '',
    editeur: '',
  },
];

describe('remove movie duplicate function', () => {
  it('should remove objects with same title', () => {
    const unique = removeDuplicateTitle(objectArray);
    const expectedResult = [
      {
        titre: 'Soul',
        auteur: '',
        editeur: 'Disney',
      },
      {
        titre: 'Vice-Versa',
        auteur: '',
        editeur: 'Pixar',
      },
      {
        titre: 'Kudo',
        auteur: '',
        editeur: '',
      },
    ];
    expect(unique).toEqual(expectedResult);
  });
});
