(function() {
  angular.module('challengeApp')
    .constant('country_codes', // ISO 3166-1 from: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
		{

ZIM:{flag:'zwe', state: 'Zimbabwe'},
ZAM:{flag:'zmb', state: 'Zambia'},
YEM:{flag:'yem', state: 'Yemen'},
VIR:{flag:'vir', state: 'United States Virgin Islands'},
VIN:{flag:'vct', state: 'Saint Vincent and the Grenadines'},
VIE:{flag:'vnm', state: 'Vietnam'},
VGB:{flag:'vgb', state: 'British Virgin Islands'},
VEN:{flag:'ven', state: 'Venezuela'},
VAN:{flag:'vut', state: 'Vanuatu'},
UZB:{flag:'uzb', state: 'Uzbekistan'},
USA:{flag:'usa', state: 'United States'},
URU:{flag:'ury', state: 'Uruguay'},
UKR:{flag:'ukr', state: 'Ukraine'},
UGA:{flag:'uga', state: 'Uganda'},
UAE:{flag:'are', state: 'United Arab Emirates'},
TUR:{flag:'tur', state: 'Turkey'},
TUN:{flag:'tun', state: 'Tunisia'},
TRI:{flag:'tto', state: 'Trinidad and Tobago'},
TPE:{flag:'twn', state: 'Republic of China (Taiwan)'},
TOG:{flag:'tgo', state: 'Togo'},
TLS:{flag:'tls', state: 'Timor-Leste'},
TKM:{flag:'tkm', state: 'Turkmenistan'},
TJK:{flag:'tjk', state: 'Tajikistan'},
THA:{flag:'tha', state: 'Thailand'},
TGA:{flag:'ton', state: 'Tonga'},
TCA:{flag:'tca', state: 'Turks and Caicos Islands'},
TAN:{flag:'tza', state: 'Tanzania'},
TAH:{flag:'pyf', state: 'French Polynesia'},
SYR:{flag:'syr', state: 'Syria'},
SWZ:{flag:'swz', state: 'Swaziland'},
SWE:{flag:'swe', state: 'Sweden'},
SLO:{flag:'svn', state: 'Slovenia'},
SVK:{flag:'svk', state: 'Slovakia'},
SUR:{flag:'sur', state: 'Suriname'},
SUI:{flag:'che', state: 'Switzerland'},
STP:{flag:'stp', state: 'São Tomé and Príncipe'},
SSD:{flag:'ssd', state: 'South Sudan'},
SRI:{flag:'lka', state: 'Sri Lanka'},
SRB:{flag:'srb', state: 'Serbia'},
SOM:{flag:'som', state: 'Somalia'},
SOL:{flag:'slb', state: 'Solomon Islands'},
SMR:{flag:'smr', state: 'San Marino'},
SLV:{flag:'slv', state: 'El Salvador'},
SLE:{flag:'sle', state: 'Sierra Leone'},
SKN:{flag:'kna', state: 'Saint Kitts and Nevis'},
SIN:{flag:'sgp', state: 'Singapore'},
SEY:{flag:'syc', state: 'Seychelles'},
SEN:{flag:'sen', state: 'Senegal'},
SUD:{flag:'sdn', state: 'Sudan'},
SCO:{flag:'sco', state: 'Scotland'},
SAM:{flag:'wsm', state: 'Samoa'},
RWA:{flag:'rwa', state: 'Rwanda'},
RUS:{flag:'rus', state: 'Russian Federation'},
RSA:{flag:'zaf', state: 'South Africa'},
ROU:{flag:'rou', state: 'Romania'},
QAT:{flag:'qat', state: 'Qatar'},
PUR:{flag:'pri', state: 'Puerto Rico'},
PRK:{flag:'prk', state: 'North Korea'},
POR:{flag:'prt', state: 'Portugal'},
POL:{flag:'pol', state: 'Poland'},
PNG:{flag:'png', state: 'Papua New Guinea'},
PLE:{flag:'pse', state: 'State of Palestine'},
PHI:{flag:'phl', state: 'Philippines'},
PER:{flag:'per', state: 'Peru'},
PAR:{flag:'pry', state: 'Paraguay'},
PAN:{flag:'pan', state: 'Panama'},
PAK:{flag:'pak', state: 'Pakistan'},
OMA:{flag:'omn', state: 'Oman'},
NZL:{flag:'nzl', state: 'New Zealand'},
NOR:{flag:'nor', state: 'Norway'},
NIR:{flag:'nir', state: 'Northern Ireland'},
NIG:{flag:'ner', state: 'Niger'},
NGA:{flag:'nga', state: 'Nigeria'},
NEP:{flag:'npl', state: 'Nepal'},
NED:{flag:'nld', state: 'Netherlands'},
NCL:{flag:'ncl', state: 'New Caledonia'},
NCA:{flag:'nic', state: 'Nicaragua'},
NAM:{flag:'nam', state: 'Namibia'},
MYA:{flag:'mmr', state: 'Myanmar'},
MWI:{flag:'mwi', state: 'Malawi'},
MTN:{flag:'mrt', state: 'Mauritania'},
MSR:{flag:'msr', state: 'Montserrat'},
MRI:{flag:'mus', state: 'Mauritius'},
MOZ:{flag:'moz', state: 'Mozambique'},
MNE:{flag:'mne', state: 'Montenegro'},
MLT:{flag:'mlt', state: 'Malta'},
MLI:{flag:'mli', state: 'Mali'},
MKD:{flag:'mkd', state: 'Macedonia'},
MGL:{flag:'mng', state: 'Mongolia'},
MEX:{flag:'mex', state: 'Mexico'},
MDV:{flag:'mdv', state: 'Maldives'},
MDA:{flag:'mda', state: 'Moldova'},
MAS:{flag:'mys', state: 'Malaysia'},
MAR:{flag:'mar', state: 'Morocco'},
MAD:{flag:'mdg', state: 'Madagascar'},
MAC:{flag:'mac', state: 'Macau'},
LAT:{flag:'lva', state: 'Latvia'},
LUX:{flag:'lux', state: 'Luxembourg'},
LTU:{flag:'ltu', state: 'Lithuania'},
LIE:{flag:'lie', state: 'Liechtenstein'},
LIB:{flag:'lbn', state: 'Lebanon'},
LES:{flag:'lso', state: 'Lesotho'},
LCA:{flag:'lca', state: 'Saint Lucia'},
LBY:{flag:'lby', state: 'Libya'},
LBR:{flag:'lbr', state: 'Liberia'},
LAO:{flag:'lao', state: 'Laos'},
KVX:{flag:'kvx', state: 'Kosovo'},
KUW:{flag:'kwt', state: 'Kuwait'},
KSA:{flag:'sau', state: 'Saudi Arabia'},
KOR:{flag:'kor', state: 'Korea, Republic of (South)'},
KGZ:{flag:'kgz', state: 'Kyrgyzstan'},
KEN:{flag:'ken', state: 'Kenya'},
KAZ:{flag:'kaz', state: 'Kazakhstan'},
JPN:{flag:'jpn', state: 'Japan'},
JOR:{flag:'jor', state: 'Jordan'},
JAM:{flag:'jam', state: 'Jamaica'},
ITA:{flag:'ita', state: 'Italy'},
ISR:{flag:'isr', state: 'Israel'},
ISL:{flag:'isl', state: 'Iceland'},
IRQ:{flag:'irq', state: 'Iraq'},
IRN:{flag:'irn', state: 'Iran'},
IRL:{flag:'irl', state: 'Ireland'},
IND:{flag:'ind', state: 'India'},
IDN:{flag:'idn', state: 'Indonesia'},
HUN:{flag:'hun', state: 'Hungary'},
HON:{flag:'hnd', state: 'Honduras'},
HKG:{flag:'hkg', state: 'Hong Kong'},
HAI:{flag:'hti', state: 'Haiti'},
GUY:{flag:'guy', state: 'Guyana'},
GUM:{flag:'gum', state: 'Guam'},
GUI:{flag:'gin', state: 'Guinea'},
GUA:{flag:'gtm', state: 'Guatemala'},
GRN:{flag:'grd', state: 'Grenada'},
GRE:{flag:'grc', state: 'Greece'},
GNB:{flag:'gnb', state: 'Guinea-Bissau'},
GIB:{flag:'gib', state: 'Gibraltar'},
GHA:{flag:'gha', state: 'Ghana'},
GER:{flag:'deu', state: 'Germany'},
GEO:{flag:'geo', state: 'Georgia'},
GAM:{flag:'gmb', state: 'The Gambia'},
GAB:{flag:'gab', state: 'Gabon'},
FRO:{flag:'fro', state: 'Faroe Islands'},
FRA:{flag:'fra', state: 'France'},
FIN:{flag:'fin', state: 'Finland'},
FIJ:{flag:'fji', state: 'Fiji'},
ETH:{flag:'eth', state: 'Ethiopia'},
EST:{flag:'est', state: 'Estonia'},
ESP:{flag:'esp', state: 'Spain'},
ERI:{flag:'eri', state: 'Eritrea'},
EQG:{flag:'gnq', state: 'Equatorial Guinea'},
GBR:{flag:'england', state: 'England'},
EGY:{flag:'egy', state: 'Egypt'},
ECU:{flag:'ecu', state: 'Ecuador'},
DOM:{flag:'dom', state: 'Dominican Republic'},
DMA:{flag:'dma', state: 'Dominica'},
DJI:{flag:'dji', state: 'Djibouti'},
DEN:{flag:'dnk', state: 'Denmark'},
CZE:{flag:'cze', state: 'Czech Republic'},
CYP:{flag:'cyp', state: 'Cyprus'},
CUW:{flag:'cuw', state: 'Curaçao'},
CUB:{flag:'cub', state: 'Cuba'},
CTA:{flag:'caf', state: 'Central African Republic'},
CRO:{flag:'hrv', state: 'Croatia'},
CRC:{flag:'cri', state: 'Costa Rica'},
CPV:{flag:'cpv', state: 'Cape Verde'},
COM:{flag:'com', state: 'Comoros'},
COL:{flag:'col', state: 'Colombia'},
COK:{flag:'cok', state: 'Cook Islands'},
COD:{flag:'cod', state: 'Congo, Democratic Republic of the'},
CMR:{flag:'cmr', state: 'Cameroon'},
CIV:{flag:'civ', state: 'Côte d\'Ivoire'},
CHN:{flag:'chn', state: 'China'},
CHI:{flag:'chl', state: 'Chile'},
CHA:{flag:'tcd', state: 'Chad'},
CGO:{flag:'cog', state: 'Congo, Republic of the'},
CAY:{flag:'cym', state: 'Cayman Islands'},
CAN:{flag:'can', state: 'Canada'},
CAM:{flag:'khm', state: 'Cambodia'},
BUL:{flag:'bgr', state: 'Bulgaria'},
BRU:{flag:'brn', state: 'Brunei'},
BRB:{flag:'brb', state: 'Barbados'},
BRA:{flag:'bra', state: 'Brazil'},
BOT:{flag:'bwa', state: 'Botswana'},
BOL:{flag:'bol', state: 'Bolivia'},
BLZ:{flag:'blz', state: 'Belize'},
BLR:{flag:'blr', state: 'Belarus'},
BIH:{flag:'bih', state: 'Bosnia and Herzegovina'},
BHU:{flag:'btn', state: 'Bhutan'},
BHR:{flag:'bhr', state: 'Bahrain'},
BFA:{flag:'bfa', state: 'Burkina Faso'},
BER:{flag:'bmu', state: 'Bermuda'},
BEN:{flag:'ben', state: 'Benin'},
BEL:{flag:'bel', state: 'Belgium'},
BDI:{flag:'bdi', state: 'Burundi'},
BAN:{flag:'bgd', state: 'Bangladesh'},
BAH:{flag:'bhs', state: 'The Bahamas'},
AZE:{flag:'aze', state: 'Azerbaijan'},
AUT:{flag:'aut', state: 'Austria'},
AUS:{flag:'aus', state: 'Australia'},
ATG:{flag:'atg', state: 'Antigua and Barbuda'},
ASA:{flag:'asm', state: 'American Samoa'},
ARU:{flag:'abw', state: 'Aruba'},
NGR:{flag:'nga', state: 'Nigeria'},
ARM:{flag:'arm', state: 'Armenia'},
ARG:{flag:'arg', state: 'Argentina'},
ANG:{flag:'ago', state: 'Angola'},
AND:{flag:'and', state: 'Andorra'},
ALG:{flag:'dza', state: 'Algeria'},
ALB:{flag:'alb', state: 'Albania'},
AIA:{flag:'aia', state: 'Anguilla'},
AFG:{flag:'afg', state: 'Afghanistan'}

		}
	)
    ;
})();

