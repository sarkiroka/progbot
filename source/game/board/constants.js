/**
 * a legalsó bit jelenti azt hogy ide lehet-e menni, vagy sem (szabad (0) vagy akadály (1))
 * a második és a harmadik bit együtt jelenti azt hogy ez a kiinduló pont (01) vagy a cél (10) minden más figyelmen kivül lesz hagyva
 * @author sarkiroka on 2017.12.28.
 */
module.exports = {
	S: 0b00000010, // Start - kiindulópont
	E: 0b00000100, // End - célállomás
	X: 0b00000001, // barrier - ezen nem lehet átmenni
	C: 0b00000110, // Checkpoint - ezen át kell menni
	'#': 0b00000000 // empty - üres rész, ezen lehet közlekedni
};
