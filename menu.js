exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, aktif) => {
	return ` *${BotName}*
  
*${tampilTanggal}* 
*${tampilWaktu}* 

「 *LIST MENU* 」

「 NAYBOTZ 」

╭════•›「 ${BotName} 」
├≽️ *.Menu*
├ _Menampilkan list menu_
├≽️ *.Group* 
├ https://chat.whatsapp.com/EoU10jL69O2BOVZvQMPG1D
├≽️ *.Owner*
├ _Info Admin bot_
╰═══════════════

╭════•›「 GRUP 」
├≽️ *.Setname*
├ _Merubah nama grup_
├≽️ *.Setdesc*
├ _Merubah deskripsi grup_
├≽️ *.Opengc*
├ _Membuka grup_
├≽️ *.Closegc*
├ _Menutup grup_
╰═══════════════

╭════•›「 Game 」
├≽️ *.Tebakgambar*
├ _Random tebak gambar_
├≽️ *.Family100*
├ _Random Pertanyaan Family100_
├≽️ *.Tod*
├ _.Truth_
├ _.Dare_
├≽️ *Kerang ajaib*
├ _.Apakah_
├ _.Bolehkah_
├ _.kapan_
╰═══════════════

╭════•›「 FUN 」
├≽️ *.Receh*
├ _Random jokes receh_
├≽️ *.Statpack*
├ _Random status bapack_
├≽️ *.Gombal*
├ _Random kata gombal_
├≽️ *.Pantun*
├ _Random pantun_
├≽️ *.Say*
├  _Ex = .Say aku sayang kamu_
├≽️ *.Infonime (nama anime)*
├ _.Infonime naruto_
├≽️ *.Namae*
├ _Ex = .Namae naisa_
├≽️ *.Alay*
├ _Ex = .Alay hai naisa_
├≽️ *.Puisi1*
├≽️ *.Puisi2*
├≽️ *.Puisi3*
├ _Random puisi_
├≽️ *.Cerpen*
├ _Random cerpen_
├≽️ *.Tagme*
├ _Auto tag_
├≽️ *.Seberapagay*
├ _Persentase gay_
├≽️ *.Seberapabucin*
├ _Persentase bucin_
├≽️ *.Ping*
├ _Mengetahui kecepatan respon_
├≽️ *.Chatprank (teks)*
├ _Ex : .Chatprank Hai bang/sat_
╰═══════════════

╭════•›「 PRIMBON 」
├≽️ *.Arti (Namamu)*
├ _Ex = .Arti udin_
├≽️ *.Couple (Namamu & doi)*
├ _Ex = .Couple rhis & naisa_
├≽️ *.Getzodiak*
├ _Ex : .Getzodiak rhis & 18-10-2002_
├≽️ *.Zodiak (zodiak)*
├ _Ex : .Zodiak libra_
├≽️ *.Mimpi (teks)*
├ _Ex : .Mimpi basah_
╰═══════════════

╭════•›「 TOOlS 」
├≽️ *.Stiker*
├ _Kirim foto ketik .stiker_
├≽️ *.Nulis*
├ _Ex = .Nulis aku cinta naisa_
├≽️ *.Ocr*
├ _Mencopy kalimat di gambar_
├≽️ *.Stalk (username ig)*
├ _Ex = .Stalk @naisaalifiayuriza_
├≽️ *.Shortlink (link)*
├ _Shorter link_
╰═══════════════

╭════•›「 PICTURE 」
├≽️ *.Cecan/.Cogan*
├ _Random foto cewe/cowo_
├≽️ *.Anime*
├ _Random foto anime_
├≽️ *.Loli*
├ _Random foto anime loli_
├≽️ *.Neko*
├ _Random foto anime neko_
├≽️ *.Quotes*
├ _Random foto quotes_
├≽️ *.Twit*
├ _Random twit_
├≽️ *.Wp*
├ _Random wallpaper_
├≽️ *.Img (nama yang dicari)*
├ _Ex = .Img naisa_
├≽️ *.Meme*
├ _Random foto lucu_
├≽️ *.bucin*
╰═══════════════

╭════•›「 TEXT 」
├≽️ *.Kata (quotes/author)*
├ _Ex = .Kata Aku cinta dia/naisa_
├≽️ *.Logopornhub (teks1/teks2)*
├ _Ex : .Logopornhub rhis/naisa
├≽️ *.Logoesport (teks)*
├ _Ex : .Logoesport naisa_(❌)
╰═══════════════

╭════•›「 EDUKASI 」
├≽️ *.Brainly (Pertanyaan)*
├ _Mengambil jawaban Brainly_
├≽️ *.Ngaji*
├ _Random ayat Al-Quran_
├≽️ *.Alquran*
├ _Ex : .Alquran 1_
├≽️ *.Wiki*
├ _Ex = .Wiki sejarah Indonesia_
├≽️ *.Sholat (Nama daerah)*
├ _Ex = .Sholat Semarang_
├≽️ *.Covid*
├ _Info terkini covid indo_
├≽️ *.Fakta*
├ _Random fakta_
├≽️ *.Kbbi (kata)*
├ _Ex = .Kbbi manusia_
├≽️ *.Tgl (Tanggal yang dicari)*
├ _Info tentang tanggal nasional_
╰═══════════════

╭════•›「 WEATHER 」
├≽️ *.Infobmkg*
├ _Random info dari BMKG_
├≽️ *.Infogempa*
├ _Random info gempa_
├≽️ *.Cuaca (nama daerah)*
├ _Ex = .Cuaca Semarang_
╰═══════════════

╭════•›「 OTHER 」
├≽️ *.Infotv*
├ _Random jadwal tv_
├≽️ *.Jadwaltv (nama channel)*
├ _Ex = .Jadwaltv Rcti_
├≽️ *.Lirik*
├ _Ex = .Lirik naisa - TakkanMenyerah_
├≽️ *.Chord*
├ _Ex = .Chord naisa - Takkanmenyerah_
├≽️ *.Map (nama daerah)*
├ _Mini map_
╰═══════════════

╭════•›「 DOWNLOADER 」
├≽️ *.Ytmp3/.Ytmp4 link*
├ _Ex = .Ytmp3 http://www.you..._
├≽️ *.Twt link*
├ _Ex = .Twt http://www.twt..._
├≽️ *.Fb link*
├ _Ex = .Fb http://www.face..._
├≽️ *.Ig link*
├ _Ex = .Ig http://www.inst.._
╰═══════════════

*Follow Me On Instagram*
${instagram}`

}
