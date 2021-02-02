
export const getTokenData = (address) => {
    // convert all addresses to upper case
    address = address.toUpperCase()

    const addressMap = {
        "0X0000000000000000000000000000000000000000": {
            ticker: "ETH",
            decimals: 18,
            coinGeckoID: "ethereum",
        },
        "0X3A3A65AAB0DD2A17E3F1947BA16138CD37D08C04": {
            ticker: "aETH",
            decimals: 18,
            coinGeckoID: "aave-eth",
        },
        "0XC02AAA39B223FE8D0A0E5C4F27EAD9083C756CC2": {
            ticker: "WETH",
            decimals: 18,
            coinGeckoID: "ethereum",
        },
        "0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48": {
            ticker: "USDC",
            decimals: 6,
            coinGeckoID: "usd-coin",
        },
        "0X9BA00D6856A4EDF4665BCA2C2309936572473B7E": {
            ticker: "aUSDC",
            decimals: 6,
            coinGeckoID: "aave-usdc",
        },
        "0XDAC17F958D2EE523A2206206994597C13D831EC7": {
            ticker: "USDT",
            decimals: 6,
            coinGeckoID: "tether",
        },
        "0X3ED3B47DD13EC9A98B44E6204A523E766B225811": {
            ticker: "aUSDT",
            decimals: 6,
            coinGeckoID: "aave-usdt",
        },
        "0X085D4780B73119B644AE5ECD22B376": {
            ticker: "TUSD",
            decimals: 18,
            coinGeckoID: "true-usd",
        },
        "0X4DA9B813057D04BAEF4E5800E36083717B4A0341": {
            ticker: "aTUSD",
            decimals: 18,
            coinGeckoID: "aave-tusd",
        },
        "0X57AB1EC28D129707052DF4DF418D58A2D46D5F51": {
            ticker: "sUSD",
            decimals: 18,
            coinGeckoID: "susd",
        },
        "0X625AE63000F46200499120B906716420BD059240": {
            ticker: "aSUSD",
            decimals: 18,
            coinGeckoID: "aave-susd",
        },
        "0X4FABB145D64652A948D72533023F6E7A623C7C53": {
            ticker: "BUSD",
            decimals: 18,
            coinGeckoID: "binance-usd",
        },
        "0X6EE0F7BB50A54AB5253DA0667B0DC2EE526C30A8": {
            ticker: "aBUSD",
            decimals: 18,
            coinGeckoID: "aave-busd",
        },
        "0X056FD409E1D7A124BD7017459DFEA2F387B6D5CD": {
            ticker: "GUSD",
            decimals: 2,
            coinGeckoID: "gemini-dollar",
        },
        "0X6B175474E89094C44DA98B954EEDEAC495271D0F": {
            ticker: "DAI",
            decimals: 18,
            coinGeckoID: "dai",
        },
        "0X028171BCA77440897B824CA71D1C56CAC55B68A3": {
            ticker: "aDAI",
            decimals: 18,
            coinGeckoID: "aave-dai",
        },
        "0X7FC66500C84A76AD7E9C93437BFC5AC33E2DDAE9": {
            ticker: "AAVE",
            decimals: 18,
            coinGeckoID: "aave",
        },
        "0X80FB784B7ED66730E8B1DBD9820AFD29931AAB03": {
            ticker: "LEND",
            decimals: 18,
            coinGeckoID: "aave-old",
        },
        "0X7D2D3688DF45CE7C552E19C27E007673DA9204B8": {
            ticker: "aLEND",
            decimals: 18,
            coinGeckoID: "aave-old",
        },
        "0X1F9840A85D5AF5BF1D1762F925BDADDC4201F984": {
            ticker: "UNI",
            decimals: 18,
            coinGeckoID: "uniswap",
        },
        "0X0BC529C00C6401AEF6D220BE8C6EA1667F6AD93E": {
            ticker: "YFI",
            decimals: 18,
            coinGeckoID: "yearn-finance",
        },
        "0X12E51E77DAAA58AA0E9247DB7510EA4B46F9BEAD": {
            ticker: "aYFI",
            decimals: 18,
            coinGeckoID: "ayfi",
        },
        "0X0D8775F648430679A709E98D2B0CB6250D2887EF": {
            ticker: "BAT",
            decimals: 18,
            coinGeckoID: "basic-attention-token",
        },
        "0XE1BA0FB44CCB0D11B80F92F4F8ED94CA3FF51D00": {
            ticker: "aBAT",
            decimals: 18,
            coinGeckoID: "aave-bat",
        },
        "0X514910771AF9CA656AF840DFF83E8264ECF986CA": {
            ticker: "LINK",
            decimals: 18,
            coinGeckoID: "chainlink",
        },
        "0XA64BD6C70CB9051F6A9BA1F163FDC07E0DFB5F84": {
            ticker: "aLINK",
            decimals: 18,
            coinGeckoID: "aave-link",
            version: 1,
        },
        "0XA06BC25B5805D5F8D82847D191CB4AF5A3E873E0": {
            ticker: "aLINK",
            decimals: 18,
            coinGeckoID: "aave-link",
            version: 2,
        },
        "0X6B3595068778DD592E39A122F4F5A5CF09C90FE2": {
            ticker: "SUSHI",
            decimals: 18,
            coinGeckoID: "sushi",
        },
        "0XD533A949740BB3306D119CC777FA900BA034CD52": {
            ticker: "CRV",
            decimals: 18,
            coinGeckoID: "curve-dao-token",
        },
        "0X2260FAC5E5542A773AA44FBCFEDF7C193BC2C599": {
            ticker: "WBTC",
            decimals: 8,
            coinGeckoID: "wrapped-bitcoin",
        },
        "0XFC4B8ED459E00E5400BE803A9BB3954234FD50E3": {
            ticker: "aWBTC",
            decimals: 8,
            coinGeckoID: "aave-wbtc",
        },
        "0X408E41876CCCDC0F92210600EF50372656052A38": {
            ticker: "REN",
            decimals: 18,
            coinGeckoID: "ren",
        },
        "0X69948CC03F478B95283F7DBF1CE764D0FC7EC54C": {
            ticker: "aREN",
            decimals: 18,
            coinGeckoID: "aave-ren",
            version: 1,
        },
        "0XCC12ABE4FF81C9378D670DE1B57F8E0DD228D77A": {
            ticker: "aREN",
            decimals: 18,
            coinGeckoID: "aave-ren",
            version: 2,
        },
        "0XC011A73EE8576FB46F5E1C5751CA3B9FE0AF2A6F": {
            ticker: "SNX",
            decimals: 18,
            coinGeckoID: "synthetix-network-token",
        },
        "0X328C4C80BC7ACA0834DB37E6600A6C49E12DA4DE": {
            ticker: "aSNX",
            decimals: 18,
            coinGeckoID: "aave-snx",
        },
        "0X9F8F72AA9304C8B593D555F12EF6589CC3A579A2": {
            ticker: "MKR",
            decimals: 18,
            coinGeckoID: "maker",
        },
        "0X7DEB5E830BE29F91E298BA5FF1356BB7F8146998": {
            ticker: "aMKR",
            decimals: 18,
            coinGeckoID: "aave-mkr",
            version: 1,
        },
        "0XC713E5E149D5D0715DCD1C156A020976E7E56B88": {
            ticker: "aMKR",
            decimals: 18,
            coinGeckoID: "aave-mkr",
            version: 2,
        }
        // "":"ENJ",
        // "":"KNC",
        // "":"MANA",
        // "":"ZRX",
        // "":"COMP",
        // "":"1INCH",
        // "":"BAO",
        // "":"ALPHA",
        // "":"CREAM",
        // "":"PICKLE",
        // "":"RSR",
        // "":"RUNE",
        // "":"UMA",
        // "":"NXM",
        // "":"BAL",
        // "":"BAND",
        // "":"HEGIC",
        // "":"MIR",
        // "":"DPI",
        // "":"FARM",
        // "":"BADGER",
        // "":"DIGG",
        // "":"SFI",
        // "":"AKRO",
        // "":"BOND",
        // "":"GRT",
        // "":"ESD",
        // "":"DSD",
        // "":"FRAX",
    }

    return addressMap.hasOwnProperty(address) ? addressMap[address] : { ticker: "???", decimals: 18 }
}
