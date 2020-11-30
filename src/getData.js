const BASE_URL = 'http://data.fixer.io/api/'
const API_KEY = 'WRONG34864e2bc429d71698ea8a4054622036'
const data = {
  success: true,
  timestamp: 1606085045,
  base: 'EUR',
  date: '2020-11-22',
  rates: {
    AED: 4.355245,
    AFN: 91.360725,
    ALL: 123.375714,
    AMD: 596.685285,
    ANG: 2.128562,
    AOA: 775.921023,
    ARS: 95.261297,
    AUD: 1.622951,
    AWG: 2.134323,
    AZN: 2.014666,
    BAM: 1.953309,
    BBD: 2.37088,
    BDT: 100.482614,
    BGN: 1.953436,
    BHD: 0.447089,
    BIF: 2300.325776,
    BMD: 1.185735,
    BND: 1.592538,
    BOB: 8.164599,
    BRL: 6.379373,
    BSD: 1.185875,
    BTC: 0.000063668165,
    BTN: 87.87943,
    BWP: 13.132465,
    BYN: 3.023798,
    BYR: 23240.404749,
    BZD: 2.390336,
    CAD: 1.552062,
    CDF: 2329.969113,
    CHF: 1.080307,
    CLF: 0.032839,
    CLP: 906.14101,
    CNY: 7.781982,
    COP: 4307.715736,
    CRC: 719.025207,
    CUC: 1.185735,
    CUP: 31.421976,
    CVE: 110.718039,
    CZK: 26.314363,
    DJF: 210.728888,
    DKK: 7.446344,
    DOP: 69.234987,
    DZD: 152.426201,
    EGP: 18.494233,
    ERN: 17.786106,
    ETB: 44.92732,
    EUR: 1,
    FJD: 2.484705,
    FKP: 0.891765,
    GBP: 0.891755,
    GEL: 3.930713,
    GGP: 0.891765,
    GHS: 6.912767,
    GIP: 0.891765,
    GMD: 61.374332,
    GNF: 11608.345178,
    GTQ: 9.231965,
    GYD: 247.801284,
    HKD: 9.191995,
    HNL: 28.837014,
    HRK: 7.561309,
    HTG: 76.185013,
    HUF: 359.801784,
    IDR: 16816.799055,
    ILS: 3.960545,
    IMP: 0.891765,
    INR: 87.937245,
    IQD: 1411.024574,
    IRR: 49925.369377,
    ISK: 161.105721,
    JEP: 0.891765,
    JMD: 174.765221,
    JOD: 0.840721,
    JPY: 123.094105,
    KES: 129.835725,
    KGS: 100.546644,
    KHR: 4808.155398,
    KMF: 492.613243,
    KPW: 1066.974633,
    KRW: 1322.248505,
    KWD: 0.362539,
    KYD: 0.988229,
    KZT: 507.481569,
    LAK: 11009.548825,
    LBP: 1802.19749,
    LKR: 219.559157,
    LRD: 184.97463,
    LSL: 18.165537,
    LTL: 3.501167,
    LVL: 0.717239,
    LYD: 1.606701,
    MAD: 10.807965,
    MDL: 20.372911,
    MGA: 4656.996158,
    MKD: 61.606674,
    MMK: 1550.492118,
    MNT: 3385.557149,
    MOP: 9.469998,
    MRO: 423.307982,
    MUR: 47.249362,
    MVR: 18.272126,
    MWK: 907.08701,
    MXN: 23.812643,
    MYR: 4.85262,
    MZN: 87.590327,
    NAD: 18.177861,
    NGN: 451.764973,
    NIO: 41.346919,
    NOK: 10.665401,
    NPR: 140.606969,
    NZD: 1.710006,
    OMR: 0.4565,
    PAB: 1.185875,
    PEN: 4.259456,
    PGK: 4.185704,
    PHP: 57.200333,
    PKR: 190.606699,
    PLN: 4.467933,
    PYG: 8345.765876,
    QAR: 4.317262,
    RON: 4.86898,
    RSD: 117.577661,
    RUB: 90.369477,
    RWF: 1172.098984,
    SAR: 4.447079,
    SBD: 9.56567,
    SCR: 24.651884,
    SDG: 65.630691,
    SEK: 10.21248,
    SGD: 1.593032,
    SHP: 0.891765,
    SLL: 11648.221393,
    SOS: 691.283807,
    SRD: 16.782917,
    STD: 24938.265737,
    SVC: 10.376697,
    SYP: 608.219377,
    SZL: 18.16526,
    THB: 35.898136,
    TJS: 13.432836,
    TMT: 4.16193,
    TND: 3.256618,
    TOP: 2.724342,
    TRY: 9.063408,
    TTD: 8.049147,
    TWD: 33.842415,
    TZS: 2749.719105,
    UAH: 33.632201,
    UGX: 4393.53062,
    USD: 1.185735,
    UYU: 50.617896,
    UZS: 12310.887651,
    VEF: 11.842525,
    VND: 27481.778616,
    VUV: 131.833114,
    WST: 3.094277,
    XAF: 655.17511,
    XAG: 0.049062,
    XAU: 0.000634,
    XCD: 3.204507,
    XDR: 0.833306,
    XOF: 656.292253,
    XPF: 119.913565,
    YER: 296.903673,
    ZAR: 18.301829,
    ZMK: 10673.031577,
    ZMW: 24.888194,
    ZWL: 381.806579,
  },
}
export const getRatesData = async () => {
  // if data got less than 12hrs, dont run
  // if no data, run
  const url = `${BASE_URL}?access_key=${API_KEY}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(response.statusText)
  //return response.json();
  return data
}

export default getRatesData

const longName = {
  success: true,
  symbols: {
    AED: 'United Arab Emirates Dirham',
    AFN: 'Afghan Afghani',
    ALL: 'Albanian Lek',
    AMD: 'Armenian Dram',
    ANG: 'Netherlands Antillean Guilder',
    AOA: 'Angolan Kwanza',
    ARS: 'Argentine Peso',
    AUD: 'Australian Dollar',
    AWG: 'Aruban Florin',
    AZN: 'Azerbaijani Manat',
    BAM: 'Bosnia-Herzegovina Convertible Mark',
    BBD: 'Barbadian Dollar',
    BDT: 'Bangladeshi Taka',
    BGN: 'Bulgarian Lev',
    BHD: 'Bahraini Dinar',
    BIF: 'Burundian Franc',
    BMD: 'Bermudan Dollar',
    BND: 'Brunei Dollar',
    BOB: 'Bolivian Boliviano',
    BRL: 'Brazilian Real',
    BSD: 'Bahamian Dollar',
    BTC: 'Bitcoin',
    BTN: 'Bhutanese Ngultrum',
    BWP: 'Botswanan Pula',
    BYN: 'New Belarusian Ruble',
    BYR: 'Belarusian Ruble',
    BZD: 'Belize Dollar',
    CAD: 'Canadian Dollar',
    CDF: 'Congolese Franc',
    CHF: 'Swiss Franc',
    CLF: 'Chilean Unit of Account (UF)',
    CLP: 'Chilean Peso',
    CNY: 'Chinese Yuan',
    COP: 'Colombian Peso',
    CRC: 'Costa Rican Colón',
    CUC: 'Cuban Convertible Peso',
    CUP: 'Cuban Peso',
    CVE: 'Cape Verdean Escudo',
    CZK: 'Czech Republic Koruna',
    DJF: 'Djiboutian Franc',
    DKK: 'Danish Krone',
    DOP: 'Dominican Peso',
    DZD: 'Algerian Dinar',
    EGP: 'Egyptian Pound',
    ERN: 'Eritrean Nakfa',
    ETB: 'Ethiopian Birr',
    EUR: 'Euro',
    FJD: 'Fijian Dollar',
    FKP: 'Falkland Islands Pound',
    GBP: 'British Pound Sterling',
    GEL: 'Georgian Lari',
    GGP: 'Guernsey Pound',
    GHS: 'Ghanaian Cedi',
    GIP: 'Gibraltar Pound',
    GMD: 'Gambian Dalasi',
    GNF: 'Guinean Franc',
    GTQ: 'Guatemalan Quetzal',
    GYD: 'Guyanaese Dollar',
    HKD: 'Hong Kong Dollar',
    HNL: 'Honduran Lempira',
    HRK: 'Croatian Kuna',
    HTG: 'Haitian Gourde',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    IMP: 'Manx pound',
    INR: 'Indian Rupee',
    IQD: 'Iraqi Dinar',
    IRR: 'Iranian Rial',
    ISK: 'Icelandic Króna',
    JEP: 'Jersey Pound',
    JMD: 'Jamaican Dollar',
    JOD: 'Jordanian Dinar',
    JPY: 'Japanese Yen',
    KES: 'Kenyan Shilling',
    KGS: 'Kyrgystani Som',
    KHR: 'Cambodian Riel',
    KMF: 'Comorian Franc',
    KPW: 'North Korean Won',
    KRW: 'South Korean Won',
    KWD: 'Kuwaiti Dinar',
    KYD: 'Cayman Islands Dollar',
    KZT: 'Kazakhstani Tenge',
    LAK: 'Laotian Kip',
    LBP: 'Lebanese Pound',
    LKR: 'Sri Lankan Rupee',
    LRD: 'Liberian Dollar',
    LSL: 'Lesotho Loti',
    LTL: 'Lithuanian Litas',
    LVL: 'Latvian Lats',
    LYD: 'Libyan Dinar',
    MAD: 'Moroccan Dirham',
    MDL: 'Moldovan Leu',
    MGA: 'Malagasy Ariary',
    MKD: 'Macedonian Denar',
    MMK: 'Myanma Kyat',
    MNT: 'Mongolian Tugrik',
    MOP: 'Macanese Pataca',
    MRO: 'Mauritanian Ouguiya',
    MUR: 'Mauritian Rupee',
    MVR: 'Maldivian Rufiyaa',
    MWK: 'Malawian Kwacha',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    MZN: 'Mozambican Metical',
    NAD: 'Namibian Dollar',
    NGN: 'Nigerian Naira',
    NIO: 'Nicaraguan Córdoba',
    NOK: 'Norwegian Krone',
    NPR: 'Nepalese Rupee',
    NZD: 'New Zealand Dollar',
    OMR: 'Omani Rial',
    PAB: 'Panamanian Balboa',
    PEN: 'Peruvian Nuevo Sol',
    PGK: 'Papua New Guinean Kina',
    PHP: 'Philippine Peso',
    PKR: 'Pakistani Rupee',
    PLN: 'Polish Zloty',
    PYG: 'Paraguayan Guarani',
    QAR: 'Qatari Rial',
    RON: 'Romanian Leu',
    RSD: 'Serbian Dinar',
    RUB: 'Russian Ruble',
    RWF: 'Rwandan Franc',
    SAR: 'Saudi Riyal',
    SBD: 'Solomon Islands Dollar',
    SCR: 'Seychellois Rupee',
    SDG: 'Sudanese Pound',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    SHP: 'Saint Helena Pound',
    SLL: 'Sierra Leonean Leone',
    SOS: 'Somali Shilling',
    SRD: 'Surinamese Dollar',
    STD: 'São Tomé and Príncipe Dobra',
    SVC: 'Salvadoran Colón',
    SYP: 'Syrian Pound',
    SZL: 'Swazi Lilangeni',
    THB: 'Thai Baht',
    TJS: 'Tajikistani Somoni',
    TMT: 'Turkmenistani Manat',
    TND: 'Tunisian Dinar',
    TOP: 'Tongan Paʻanga',
    TRY: 'Turkish Lira',
    TTD: 'Trinidad and Tobago Dollar',
    TWD: 'New Taiwan Dollar',
    TZS: 'Tanzanian Shilling',
    UAH: 'Ukrainian Hryvnia',
    UGX: 'Ugandan Shilling',
    USD: 'United States Dollar',
    UYU: 'Uruguayan Peso',
    UZS: 'Uzbekistan Som',
    VEF: 'Venezuelan Bolívar Fuerte',
    VND: 'Vietnamese Dong',
    VUV: 'Vanuatu Vatu',
    WST: 'Samoan Tala',
    XAF: 'CFA Franc BEAC',
    XAG: 'Silver (troy ounce)',
    XAU: 'Gold (troy ounce)',
    XCD: 'East Caribbean Dollar',
    XDR: 'Special Drawing Rights',
    XOF: 'CFA Franc BCEAO',
    XPF: 'CFP Franc',
    YER: 'Yemeni Rial',
    ZAR: 'South African Rand',
    ZMK: 'Zambian Kwacha (pre-2013)',
    ZMW: 'Zambian Kwacha',
    ZWL: 'Zimbabwean Dollar',
  },
}

export const getCurrenciesLongName = () => {
  return longName
}