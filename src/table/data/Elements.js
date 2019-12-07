import React from 'react';

import H from './H/H';
import hTest from './H/hTest';

import C from './C/C';

import N from './N/N';
import nTest from './N/nTest';

import Na from './Na/Na';
import O from './O/O';

const elements = {
	H: {
		color: 'Red',
		num: 1,
		weight: 1.00797,
		name: 'Водород',
		description: H,
		earthMassFraction: '1',
		humanBodyMassFraction: '9.7',
		classification: 'Органоген, s –элемент, неметалл',
		test: hTest
	},
	He: {
		color: 'Red',
		num: 2,
		weight: 4.0026,
		name: 'Гелий',
	},
	Li: {
		num: 3,
		color: 'Red',
		weight: 6.939,
		name: 'Литий',

	},
	Be: {
		num: 4,
		color: 'Red',
		weight: 9.0122,
		name: 'Бериллий',

	},
	B: {
		num: 5,
		color: 'Yellow',
		weight: 10.811,
		name: 'Бор',
	},
	C: {
		num: 6,
		color: 'Yellow',
		weight: 12.01115,
		name: 'Углерод',
		description: C,
		earthMassFraction: '0.15',
		humanBodyMassFraction: '21',
		classification: 'Органоген, p-элемент, неметалл',
	},
	N: {
		num: 7,
		color: 'Yellow',
		weight: 14.0067,
		name: 'Азот',
		description: N,
		earthMassFraction: '0,02',
		humanBodyMassFraction: '3,1',
		classification: 'Органоген, p-элемент, неметалл',
		test: nTest
	},
	O: {
		num: 8,
		color: 'Yellow',
		weight: 15.9994,
		name: 'Кислород',
		description: O,
		earthMassFraction: '49',
		humanBodyMassFraction: '67-75',
		classification: 'Органоген, p-элемент, неметалл'
	},
	F: {
		num: 9,
		color: 'Yellow',
		weight: 18.9984,
		name: 'Фтор',
	},
	Ne: {
		num: 10,
		color: 'Yellow',
		weight: 20.183,
		name: 'Неон',
	},

	Na: {
		num: 11,
		color: 'Red',
		weight: 22.9898,
		name: 'Натрий',
		description: Na,
		earthMassFraction: '2,6',
		humanBodyMassFraction: '0,1',
		classification: 's - элемент, создающий электролитную среду в крови, клеточных и межклеточных жидкостях, металл'
	},
	Mg: {
		num: 12,
		color: 'Red',
		weight: 24.312,
		name: 'Магниц',
	},
	Al: {
		num: 13,
		color: 'Yellow',
		weight: 26.9815,
		name: 'Алюминий',
	},
	Si: {
		num: 14,
		color: 'Yellow',
		weight: 28.086,
		name: 'Кремний',
	},
	P: {
		num: 15,
		color: 'Yellow',
		weight: 30.9738,
		name: 'Фосфор',
	},
	S: {
		num: 16,
		color: 'Yellow',
		weight: 32.064,
		name: 'Сера',
	},
	Cl: {
		num: 17,
		color: 'Yellow',
		weight: 35.453,
		name: 'Хлор',
	},
	Ar: {
		num: 18,
		color: 'Yellow',
		weight: 39.948,
		name: 'Аргон',
	},

	K: {
		num: 19,
		color: 'Red',
		weight: 39.102,
		name: 'Калий',
	},
	Ca: {
		num: 20,
		color: 'Red',
		weight: 40.08,
		name: 'Кальций',
	},
	Sc: {
		num: 21,
		color: 'Green',
		weight: 44.956,
		name: 'Скандий',
	},
	Ti: {
		num: 22,
		color: 'Green',
		weight: 47.9,
		name: 'Титан',
	},
	V: {
		num: 23,
		color: 'Green',
		weight: 50.942,
		name: 'Ванадий',
	},
	Cr: {
		num: 24,
		color: 'Green',
		weight: 51.996,
		name: 'Хром',
	},
	Mn: {
		num: 25,
		color: 'Green',
		weight: 54.938,
		name: 'Марганец',
	},
	Fe: {
		num: 26,
		color: 'Green',
		weight: 55.847,
		name: 'Железо',
		description: () => <div></div>,
		earthMassFraction: '5',
		humanBodyMassFraction: '0,01',
		classification: 'Микроэлемент, d-элемент, входящий в структуру белка гемоглобина и в активные центры ферментов, необходимые для регулирования многих биохимических реакций, металл'
	},
	Co: {
		num: 27,
		color: 'Green',
		weight: 58.9332,
		name: 'Кобальт',
	},
	Ni: {
		num: 28,
		color: 'Green',
		weight: 58.71,
		name: 'Никель',
	},
	Cu: {
		num: 29,
		color: 'Green',
		weight: 63.546,
		name: 'Медь',
	},
	Zn: {
		num: 30,
		color: 'Green',
		weight: 65.39,
		name: 'Цинк',
		description: () => <div></div>,
		earthMassFraction: '5 ∙ 10-3',
		humanBodyMassFraction: '1∙10-3',
		classification: 'd- элемент, металл'
	},
	Ga: {
		num: 31,
		color: 'Yellow',
		weight: 69.72,
		name: 'Галлий',
	},
	Ge: {
		num: 32,
		color: 'Yellow',
		weight: 72.59,
		name: 'Германий',
	},
	As: {
		num: 33,
		color: 'Yellow',
		weight: 74.9,
		name: 'Мышьяк',
		description: () => <div></div>,
		earthMassFraction: '5 ∙ 10-4',
		humanBodyMassFraction: '10-5',
		classification: 'Токсикант, р- элемент, неметалл'
	},
	Se: {
		num: 34,
		color: 'Yellow',
		weight: 79,
		name: 'Селен',
		description: () => <div></div>,
		earthMassFraction: '6 ∙ 10-5',
		humanBodyMassFraction: '10-5 - 10 - 7',
		classification: 'р-элемент, неметалл'
	},
	Br: {
		num: 35,
		color: 'Yellow',
		weight: 79.9,
		name: 'Бром',
	},
	Kr: {
		num: 36,
		color: 'Yellow',
		weight: 83.8,
		name: 'Криптон',
	},
	Rb: {
		num: 37,
		color: 'Red',
		weight: 85.5,
		name: 'Рубидий',
	},
	Sr: {
		num: 38,
		color: 'Red',
		weight: 87.6,
		name: 'Стронций',
	},
	Y: {
		num: 39,
		color: 'Green',
		weight: 88.9,
		name: 'Иттрий',
	},
	Zr: {
		num: 40,
		color: 'Green',
		weight: 91.2,
		name: 'Цирконий',
	},
	Nb: {
		num: 41,
		color: 'Green',
		weight: 92.9,
		name: 'Ниобий',
	},
	Mo: {
		num: 42,
		color: 'Green',
		weight: 95.9,
		name: 'Молибден',
	},
	Tc: {
		num: 43,
		color: 'Green',
		weight: '(98)',
		name: 'Технеций',
	},
	Ru: {
		num: 44,
		color: 'Green',
		weight: 101.1,
		name: 'Рутений',
	},
	Rh: {
		num: 45,
		color: 'Green',
		weight: 102.9,
		name: 'Родий',
	},
	Pd: {
		num: 46,
		color: 'Green',
		weight: 106.4,
		name: 'Палладий',
	},
	Ag: {
		num: 47,
		color: 'Green',
		weight: 107.9,
		name: 'Серебро',
	},
	Cd: {
		num: 48,
		color: 'Green',
		weight: 112.4,
		name: 'Кадмий',
	},
	In: {
		num: 49,
		color: 'Yellow',
		weight: 114.8,
		name: 'Индий',
	},
	Sn: {
		num: 50,
		color: 'Yellow',
		weight: 118.7,
		name: 'Олово',
	},
	Sb: {
		num: 51,
		color: 'Yellow',
		weight: 121.8,
		name: 'Сурьма',
	},
	Te: {
		num: 52,
		color: 'Yellow',
		weight: 127.6,
		name: 'Теллур',
	},
	I: {
		num: 53,
		color: 'Yellow',
		weight: 126.9,
		name: 'Йод',
	},
	Xe: {
		num: 54,
		color: 'Yellow',
		weight: 131.3,
		name: 'Ксенон',
	},
	Cs: {
		num: 55,
		color: 'Red',
		weight: 132.9,
		name: 'Цезий',
	},
	Ba: {
		num: 56,
		color: 'Red',
		weight: 137.3,
		name: 'Барий',

		description: () => <div></div>,
		earthMassFraction: '0,04',
		humanBodyMassFraction: '10-5',
		classification: `Микроэлементы, входящие в структуру и в активные
		центры ферментов, необходимые для регулирования многих
		биохимических реакций., s-элемент, металл`,
	},
	'La*': {
		num: 57,
		color: 'Green',
		weight: 138.9,
		name: 'Лантан',
	},

	Hf: {
		num: 72,
		color: 'Green',
		weight: 178.5,
		name: 'Гафний',
	},

	Ta: {
		num: 73,
		color: 'Green',
		weight: 180.9,
		name: 'Тантал',
	},
	W: {
		num: 74,
		color: 'Green',
		weight: 183.9,
		name: 'Вольфрам',
	},
	Re: {
		num: 75,
		color: 'Green',
		weight: 186.2,
		name: 'Рений',
	},
	Os: {
		num: 76,
		color: 'Green',
		weight: 190.2,
		name: 'Осмий',
	},
	Ir: {
		num: 77,
		color: 'Green',
		weight: 192.2,
		name: 'Иридий',
	},
	Pt: {
		num: 78,
		color: 'Green',
		weight: 195.1,
		name: 'Платина',
	},
	Au: {
		num: 79,
		color: 'Green',
		weight: 197.0,
		name: 'Золото',
	},
	Hg: {
		num: 80,
		color: 'Green',
		weight: 200.6,
		name: 'Ртуть',
	},
	Tl: {
		num: 81,
		color: 'Yellow',
		weight: 204.4,
		name: 'Таллий',
	},
	Pb: {
		num: 82,
		color: 'Yellow',
		weight: 207.2,
		name: 'Свинец',
	},
	Bi: {
		num: 83,
		color: 'Yellow',
		weight: 209.0,
		name: 'Висмут',
	},
	Po: {
		num: 84,
		color: 'Yellow',
		weight: '(209)',
		name: 'Полоний',
	},
	At: {
		num: 85,
		color: 'Yellow',
		weight: '(210)',
		name: 'Астат',
	},
	Rn: {
		num: 86,
		color: 'Yellow',
		weight: '(222)',
		name: 'Радон',
	},

	Fr: {
		num: 87,
		color: 'Red',
		weight: '(223)',
		name: 'Франций',
	},
	Ra: {
		num: 88,
		color: 'Red',
		weight: '(226)',
		name: 'Радий',
	},
	'Ac**': {
		num: 89,
		color: 'Green',
		weight: '(227)',
		name: 'Актиний',
	},

	Rf: {
		num: 104,
		color: 'Green',
		weight: '(226)',
		name: 'Резерфордий',
	},
	Db: {
		num: 105,
		color: 'Green',
		weight: '(261)',
		name: 'Дубний',
	},
	Sg: {
		num: 106,
		color: 'Green',
		weight: '(263)',
		name: 'Сиборгий',
	},
	Bh: {
		num: 107,
		color: 'Green',
		weight: '(262)',
		name: 'Борий',
	},
	Hs: {
		num: 108,
		color: 'Green',
		weight: '(265)',
		name: 'Хассий',
	},
	Mt: {
		num: 109,
		color: 'Green',
		weight: '(266)',
		name: 'Мейтнерий',
	},
	Ds: {
		num: 110,
		color: 'Green',
		weight: '(271)',
		name: 'Дармштадтий',
	},
	Rg: {
		num: 111,
		color: 'Green',
		weight: '(272)',
		name: 'Рентгений',
	},
};

export default elements;
