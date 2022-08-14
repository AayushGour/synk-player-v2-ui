import React from 'react';
import { DarkMode, LightMode, PlaylistPlay } from "@mui/icons-material";
import { store } from "../components/store/store";
export const sidebarMenuItems = [
    // {
    //     id: 1,
    //     title: "Trending",
    //     icon: <Whatshot />,
    //     route: "/"
    // },
    {
        id: 2,
        title: "Playlists",
        icon: <PlaylistPlay />,
        route: "/playlists",
        type: "nav-link"
    },
    // {
    //     id: 3,
    //     type: "divider"
    // },
    // {
    //     id: 4,
    //     title: "My Playlists",
    //     icon: <PlaylistPlay />,
    //     route: "/my-playlists"
    // },
]
export const sidebarBottomMenuItems = [
    {
        id: "b-1",
        title: "Theme",
        type: "switch",
        offIcon: <LightMode />,
        onIcon: <DarkMode />
    }
]
export const Logo = (props) => {
    return <svg className={`harmony-logo ${props?.className}`} style={{ transition: "all 0.3s" }} height="100" width="100" viewBox='-1 -1 49 45' strokeLinecap='round' {...props}>
        <path className='logo-waveform' stroke='black' d="M 6 26 L 6 16 M 11 11 L 11 36 M 16 6 L 16 31 M 31 16 L 31 38 M 36 11 L 36 33 M 41 16 L 41 28 M 46 21 L 46 25 M 1 16 L 1 21 M 21 21" />
        <path className='logo-H' stroke="#01a4e9" d="M 21 1 L 21 41 M 26 6 L 26 36 M 21 21 L 26 21" />
    </svg>
}
export const Charts = {
    BILLBOARD_GLOBAL_200: "billboard-global-200",
    BILLBOARD_GLOBAL_EXCL_US: "billboard-global-excl-us",
    CLASSICAL_ALBUMS: "classical-albums",
    CLASSICAL_CROSSOVER_ALBUMS: "classical-crossover-albums",
    TRADITIONAL_CLASSIC_ALBUMS: "traditional-classic-albums",
    POP_SONGS: "pop-songs",
    ADULT_CONTEMPORARY: "adult-contemporary",
    ADULT_POP_SONGS: "adult-pop-songs",
    JAZZ_ALBUMS: "jazz-albums",
    CONTEMPORARY_JAZZ: "contemporary-jazz",
    TRADITIONAL_JAZZ_ALBUMS: "traditional-jazz-albums",
    JAZZ_SONGS: "jazz-songs",
    BANDSINTOWN_TOP_US: "bandsintown-top-us",
    BANDSINTOWN_RISING_US: "bandsintown-rising-us",
    BANDSINTOWN_TOP_GLOBAL: "bandsintown-top-global",
    BANDSINTOWN_RISING_GLOBAL: "bandsintown-rising-global",
    TOP_TRILLER_GLOBAL: "top-triller-global",
    TOP_TRILLER_US: "top-triller-us",
    LYRICFIND_GLOBAL: "lyricfind-global",
    LYRICFIND_US: "lyricfind-us",
    HOT_100: "hot-100",
    BILLBOARD_200: "billboard-200",
    ARTIST_100: "artist-100",
    SOCIAL_50: "social-50",
    STREAMING_SONGS: "streaming-songs",
    RADIO_SONGS: "radio-songs",
    DIGITAL_SONG_SALES: "digital-song-sales",
    TOP_ALBUM_SALES: "top-album-sales",
    BILLBOARD_U_S_AFROBEATS_SONGS: "billboard-u-s-afrobeats-songs",
    CURRENT_ALBUMS: "current-albums",
    CATALOG_ALBUMS: "catalog-albums",
    INDEPENDENT_ALBUMS: "independent-albums",
    SOUNDTRACKS: "soundtracks",
    VINYL_ALBUMS: "vinyl-albums",
    COUNTRY_SONGS: "country-songs",
    COUNTRY_ALBUMS: "country-albums",
    COUNTRY_STREAMING_SONGS: "country-streaming-songs",
    COUNTRY_AIRPLAY: "country-airplay",
    COUNTRY_DIGITAL_SONG_SALES: "country-digital-song-sales",
    BLUEGRASS_ALBUMS: "bluegrass-albums",
    AMERICANA_FOLK_ALBUMS: "americana-folk-albums",
    SUMMER_SONGS: "summer-songs",
    EMERGING_ARTISTS: "emerging-artists",
    HEATSEEKERS_ALBUMS: "heatseekers-albums",
    BLUES_ALBUMS: "blues-albums",
    BUBBLING_UNDER_HOT_100_SINGLES: "bubbling-under-hot-100-singles",
    CAST_ALBUMS: "cast-albums",
    COMEDY_ALBUMS: "comedy-albums",
    COMPILATION_ALBUMS: "compilation-albums",
    HOT_SINGLES_RECURRENTS: "hot-singles-recurrents",
    KIDS_ALBUMS: "kids-albums",
    NEW_AGE_ALBUMS: "new-age-albums",
    REGGAE_ALBUMS: "reggae-albums",
    TASTEMAKER_ALBUMS: "tastemaker-albums",
    WORLD_ALBUMS: "world-albums",
    WORLD_DIGITAL_SONG_SALES: "world-digital-song-sales",
    GREATEST_OF_ALL_TIME_ARTISTS: "greatest-of-all-time-artists",
    GREATEST_HOT_100_SINGLES: "greatest-hot-100-singles",
    GREATEST_HOT_100_ARTISTS: "greatest-hot-100-artists",
    GREATEST_BILLBOARD_200_ALBUMS: "greatest-billboard-200-albums",
    GREATEST_BILLBOARD_200_ARTISTS: "greatest-billboard-200-artists",
    GREATEST_HOT_100_SONGS_BY_WOMEN: "greatest-hot-100-songs-by-women",
    GREATEST_HOT_100_WOMEN_ARTISTS: "greatest-hot-100-women-artists",
    GREATEST_BILLBOARD_200_ALBUMS_BY_WOMEN: "greatest-billboard-200-albums-by-women",
    GREATEST_BILLBOARD_200_WOMEN_ARTISTS: "greatest-billboard-200-women-artists",
    GREATEST_BILLBOARDS_TOP_SONGS_80S: "greatest-billboards-top-songs-80s",
    GREATEST_BILLBOARDS_TOP_SONGS_90S: "greatest-billboards-top-songs-90s",
    GREATEST_OF_ALL_TIME_SONGS_OF_THE_SUMMER: "greatest-of-all-time-songs-of-the-summer",
    GREATEST_OF_ALL_TIME_HOLIDAY_100_SONGS: "greatest-of-all-time-holiday-100-songs",
    GREATEST_OF_ALL_TIME_TOP_HOLIDAY_ALBUMS: "greatest-of-all-time-top-holiday-albums",
    GREATEST_OF_ALL_TIME_POP_SONGS: "greatest-of-all-time-pop-songs",
    GREATEST_OF_ALL_TIME_POP_SONGS_ARTISTS: "greatest-of-all-time-pop-songs-artists",
    GREATEST_ADULT_POP_SONGS: "greatest-adult-pop-songs",
    GREATEST_ADULT_POP_ARTISTS: "greatest-adult-pop-artists",
    GREATEST_COUNTRY_SONGS: "greatest-country-songs",
    GREATEST_COUNTRY_ALBUMS: "greatest-country-albums",
    GREATEST_COUNTRY_ARTISTS: "greatest-country-artists",
    GREATEST_OF_ALL_TIME_LATIN_ARTISTS: "greatest-of-all-time-latin-artists",
    GREATEST_HOT_LATIN_SONGS: "greatest-hot-latin-songs",
    GREATEST_HOT_LATIN_SONGS_ARTISTS: "greatest-hot-latin-songs-artists",
    GREATEST_TOP_DANCE_CLUB_ARTISTS: "greatest-top-dance-club-artists",
    GREATEST_R_B_HIP_HOP_SONGS: "greatest-r-b-hip-hop-songs",
    GREATEST_R_B_HIP_HOP_ALBUMS: "greatest-r-b-hip-hop-albums",
    GREATEST_R_B_HIP_HOP_ARTISTS: "greatest-r-b-hip-hop-artists",
    GREATEST_ALTERNATIVE_SONGS: "greatest-alternative-songs",
    GREATEST_ALTERNATIVE_ARTISTS: "greatest-alternative-artists",
    GREATEST_OF_ALL_TIME_ADULT_ALTERNATIVE_SONGS: "greatest-of-all-time-adult-alternative-songs",
    GREATEST_OF_ALL_TIME_ADULT_ALTERNATIVE_ARTISTS: "greatest-of-all-time-adult-alternative-artists",
    GREATEST_OF_ALL_TIME_MAINSTREAM_ROCK_SONGS: "greatest-of-all-time-mainstream-rock-songs",
    GREATEST_OF_ALL_TIME_MAINSTREAM_ROCK_ARTISTS: "greatest-of-all-time-mainstream-rock-artists",
    LATIN_SONGS: "latin-songs",
    LATIN_ALBUMS: "latin-albums",
    LATIN_STREAMING_SONGS: "latin-streaming-songs",
    LATIN_AIRPLAY: "latin-airplay",
    LATIN_DIGITAL_SONG_SALES: "latin-digital-song-sales",
    REGIONAL_MEXICAN_ALBUMS: "regional-mexican-albums",
    LATIN_REGIONAL_MEXICAN_AIRPLAY: "latin-regional-mexican-airplay",
    LATIN_POP_ALBUMS: "latin-pop-albums",
    LATIN_POP_AIRPLAY: "latin-pop-airplay",
    TROPICAL_ALBUMS: "tropical-albums",
    LATIN_TROPICAL_AIRPLAY: "latin-tropical-airplay",
    LATIN_RHYTHM_ALBUMS: "latin-rhythm-albums",
    LATIN_RHYTHM_AIRPLAY: "latin-rhythm-airplay",
    CHRISTIAN_SONGS: "christian-songs",
    CHRISTIAN_ALBUMS: "christian-albums",
    CHRISTIAN_STREAMING_SONGS: "christian-streaming-songs",
    CHRISTIAN_AIRPLAY: "christian-airplay",
    HOT_CHRISTIAN_ADULT_CONTEMPORARY: "hot-christian-adult-contemporary",
    CHRISTIAN_DIGITAL_SONG_SALES: "christian-digital-song-sales",
    GOSPEL_SONGS: "gospel-songs",
    GOSPEL_ALBUMS: "gospel-albums",
    GOSPEL_STREAMING_SONGS: "gospel-streaming-songs",
    GOSPEL_AIRPLAY: "gospel-airplay",
    GOSPEL_DIGITAL_SONG_SALES: "gospel-digital-song-sales",
    BILLBOARD_ARGENTINA_HOT_100: "billboard-argentina-hot-100",
    CANADIAN_HOT_100: "canadian-hot-100",
    CANADIAN_ALBUMS: "canadian-albums",
    JAPAN_HOT_100: "japan-hot-100",
    BILLBOARD_VIETNAM_HOT_100: "billboard-vietnam-hot-100",
    BILLBOARD_VIETNAM_TOP_VIETNAMESE_SONGS: "billboard-vietnam-top-vietnamese-songs",
    OFFICIAL_UK_SONGS: "official-uk-songs",
    OFFICIAL_UK_ALBUMS: "official-uk-albums",
    AUSTRALIA_SONGS_HOTW: "australia-songs-hotw",
    AUSTRALIAN_ALBUMS: "australian-albums",
    AUSTRIA_SONGS_HOTW: "austria-songs-hotw",
    BELGIUM_SONGS_HOTW: "belgium-songs-hotw",
    BOLIVIA_SONGS_HOTW: "bolivia-songs-hotw",
    BRAZIL_SONGS_HOTW: "brazil-songs-hotw",
    CHILE_SONGS_HOTW: "chile-songs-hotw",
    COLOMBIA_SONGS_HOTW: "colombia-songs-hotw",
    CROATIA_SONGS_HOTW: "croatia-songs-hotw",
    CZECH_REPUBLIC_SONGS_HOTW: "czech-republic-songs-hotw",
    DENMARK_SONGS_HOTW: "denmark-songs-hotw",
    ECUADOR_SONGS_HOTW: "ecuador-songs-hotw",
    FINLAND_SONGS_HOTW: "finland-songs-hotw",
    FRANCE_SONGS_HOTW: "france-songs-hotw",
    GERMANY_SONGS_HOTW: "germany-songs-hotw",
    GERMAN_ALBUMS: "german-albums",
    GREECE_SONGS_HOTW: "greece-songs-hotw",
    GREECE_ALBUMS: "greece-albums",
    HONG_KONG_SONGS_HOTW: "hong-kong-songs-hotw",
    HUNGARY_SONGS_HOTW: "hungary-songs-hotw",
    ICELAND_SONGS_HOTW: "iceland-songs-hotw",
    INDIA_SONGS_HOTW: "india-songs-hotw",
    INDONESIA_SONGS_HOTW: "indonesia-songs-hotw",
    IRELAND_SONGS_HOTW: "ireland-songs-hotw",
    LUXEMBOURG_SONGS_HOTW: "luxembourg-songs-hotw",
    MALAYSIA_SONGS_HOTW: "malaysia-songs-hotw",
    MEXICO_SONGS_HOTW: "mexico-songs-hotw",
    NETHERLANDS_SONGS_HOTW: "netherlands-songs-hotw",
    NEW_ZEALAND_SONGS_HOTW: "new-zealand-songs-hotw",
    NORWAY_SONGS_HOTW: "norway-songs-hotw",
    PERU_SONGS_HOTW: "peru-songs-hotw",
    PHILIPPINES_SONGS_HOTW: "philippines-songs-hotw",
    POLAND_SONGS_HOTW: "poland-songs-hotw",
    PORTUGAL_SONGS_HOTW: "portugal-songs-hotw",
    ROMANIA_SONGS_HOTW: "romania-songs-hotw",
    SINGAPORE_SONGS_HOTW: "singapore-songs-hotw",
    SLOVAKIA_SONGS_HOTW: "slovakia-songs-hotw",
    SOUTH_AFRICA_SONGS_HOTW: "south-africa-songs-hotw",
    SOUTH_KOREA_SONGS_HOTW: "south-korea-songs-hotw",
    SPAIN_SONGS_HOTW: "spain-songs-hotw",
    SWEDEN_SONGS_HOTW: "sweden-songs-hotw",
    SWITZERLAND_SONGS_HOTW: "switzerland-songs-hotw",
    TAIWAN_SONGS_HOTW: "taiwan-songs-hotw",
    TURKEY_SONGS_HOTW: "turkey-songs-hotw",
    U_K_SONGS_HOTW: "u-k-songs-hotw",
    HOT_HOLIDAY_SONGS: "hot-holiday-songs",
    HOLIDAY_ALBUMS: "holiday-albums",
    HOLIDAY_STREAMING_SONGS: "holiday-streaming-songs",
    HOLIDAY_SONGS: "holiday-songs",
    HOLIDAY_SEASON_DIGITAL_SONG_SALES: "holiday-season-digital-song-sales",
    DANCE_ELECTRONIC_SONGS: "dance-electronic-songs",
    DANCE_ELECTRONIC_ALBUMS: "dance-electronic-albums",
    DANCE_ELECTRONIC_STREAMING_SONGS: "dance-electronic-streaming-songs",
    DANCE_ELECTRONIC_DIGITAL_SONG_SALES: "dance-electronic-digital-song-sales",
    HOT_DANCE_AIRPLAY: "hot-dance-airplay",
    DANCE_CLUB_PLAY_SONGS: "dance-club-play-songs",
    R_B_HIP_HOP_SONGS: "r-b-hip-hop-songs",
    R_B_HIP_HOP_ALBUMS: "r-b-hip-hop-albums",
    R_AND_B_HIP_HOP_STREAMING_SONGS: "r-and-b-hip-hop-streaming-songs",
    HOT_R_AND_B_HIP_HOP_AIRPLAY: "hot-r-and-b-hip-hop-airplay",
    R_AND_B_HIP_HOP_DIGITAL_SONG_SALES: "r-and-b-hip-hop-digital-song-sales",
    R_AND_B_SONGS: "r-and-b-songs",
    R_AND_B_ALBUMS: "r-and-b-albums",
    R_AND_B_STREAMING_SONGS: "r-and-b-streaming-songs",
    R_AND_B_DIGITAL_SONG_SALES: "r-and-b-digital-song-sales",
    RAP_SONG: "rap-song",
    RAP_ALBUMS: "rap-albums",
    RAP_STREAMING_SONGS: "rap-streaming-songs",
    HOT_RAP_TRACKS: "hot-rap-tracks",
    RAP_DIGITAL_SONG_SALES: "rap-digital-song-sales",
    MAINSTREAM_R_AND_B_HIP_HOP: "mainstream-r-and-b-hip-hop",
    HOT_ADULT_R_AND_B_AIRPLAY: "hot-adult-r-and-b-airplay",
    RHYTHMIC_40: "rhythmic-40",
    HOT_100_SONGWRITERS: "hot-100-songwriters",
    HOT_100_PRODUCERS: "hot-100-producers",
    COUNTRY_SONGWRITERS: "country-songwriters",
    COUNTRY_PRODUCERS: "country-producers",
    RB_HIP_HOP_SONGWRITERS: "rb-hip-hop-songwriters",
    RB_HIP_HOP_PRODUCERS: "rb-hip-hop-producers",
    RB_SONGWRITERS: "rb-songwriters",
    RB_PRODUCERS: "rb-producers",
    RAP_SONGWRITERS: "rap-songwriters",
    RAP_PRODUCERS: "rap-producers",
    LATIN_SONGWRITERS: "latin-songwriters",
    LATIN_PRODUCERS: "latin-producers",
    ROCK_ALTERNATIVE_SONGWRITERS: "rock-alternative-songwriters",
    ROCK_ALTERNATIVE_PRODUCERS: "rock-alternative-producers",
    ROCK_SONGWRITERS: "rock-songwriters",
    ROCK_PRODUCERS: "rock-producers",
    ALTERNATIVE_SONGWRITERS: "alternative-songwriters",
    ALTERNATIVE_PRODUCERS: "alternative-producers",
    HARD_ROCK_SONGWRITERS: "hard-rock-songwriters",
    HARD_ROCK_PRODUCERS: "hard-rock-producers",
    DANCE_ELECTRONIC_SONGWRITERS: "dance-electronic-songwriters",
    DANCE_ELECTRONIC_PRODUCERS: "dance-electronic-producers",
    CHRISTIAN_SONGWRITERS: "christian-songwriters",
    CHRISTIAN_PRODUCERS: "christian-producers",
    GOSPEL_SONGWRITERS: "gospel-songwriters",
    GOSPEL_PRODUCERS: "gospel-producers",
    ROCK_SONGS: "rock-songs",
    TOP_ROCK_ALTERNATIVE_ALBUMS: "top-rock-alternative-albums",
    ROCK_AIRPLAY: "rock-airplay",
    HOT_ROCK_SONGS: "hot-rock-songs",
    ROCK_ALBUMS: "rock-albums",
    ROCK_STREAMING_SONGS: "rock-streaming-songs",
    ROCK_DIGITAL_SONG_SALES: "rock-digital-song-sales",
    HOT_ALTERNATIVE_SONGS: "hot-alternative-songs",
    ALTERNATIVE_ALBUMS: "alternative-albums",
    ALTERNATIVE_STREAMING_SONGS: "alternative-streaming-songs",
    ALTERNATIVE_AIRPLAY: "alternative-airplay",
    ALTERNATIVE_DIGITAL_SONG_SALES: "alternative-digital-song-sales",
    HOT_HARD_ROCK_SONGS: "hot-hard-rock-songs",
    HARD_ROCK_ALBUMS: "hard-rock-albums",
    HARD_ROCK_STREAMING_SONGS: "hard-rock-streaming-songs",
    HARD_ROCK_DIGITAL_SONG_SALES: "hard-rock-digital-song-sales",
    TRIPLE_A: "triple-a",
    HOT_MAINSTREAM_ROCK_TRACKS: "hot-mainstream-rock-tracks"
}