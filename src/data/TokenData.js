
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
            coinGeckoID: "ethereum",
        },
        "0XC02AAA39B223FE8D0A0E5C4F27EAD9083C756CC2": {
            ticker: "WETH",
            decimals: 18,
            coinGeckoID: "ethereum",
        },
        "0X030BA81F1C18D280636F32AF80B9AAD02CF0854E": {
            ticker: "aWETH",
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
            version: 1,
        },
        "0XBCCA60BB61934080951369A648FB03DF4F96263C": {
            ticker: "aUSDC",
            decimals: 6,
            coinGeckoID: "aave-usdc",
            version: 2,
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
        "0X71FC860F7D3A592A4A98740E39DB31D25DB65AE8": {
            ticker: "aUSDT",
            decimals: 6,
            coinGeckoID: "aave-usdt",
        },
        "0X0000000000085D4780B73119B644AE5ECD22B376": {
            ticker: "TUSD",
            decimals: 18,
            coinGeckoID: "true-usd",
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
        "0X101CC05F4A51C0319F570D5E146A8C625198E636": {
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
        "0X6C5024CD4F8A59110119C56F8933403A539555EB": {
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
        "0XA361718326C15715591C299427C62086F69923D9": {
            ticker: "aBUSD",
            decimals: 18,
            coinGeckoID: "aave-busd",
        },
        "0X056FD409E1D7A124BD7017459DFEA2F387B6D5CD": {
            ticker: "GUSD",
            decimals: 2,
            coinGeckoID: "gemini-dollar",
        },
        "0XD37EE7E4F452C6638C96536E68090DE8CBCDB583": {
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
        "0XFC1E690F61EFD961294B3E1CE3313FBD8AA4F85D": {
            ticker: "aDAI",
            decimals: 18,
            coinGeckoID: "aave-dai",
        },
        "0X7FC66500C84A76AD7E9C93437BFC5AC33E2DDAE9": {
            ticker: "AAVE",
            decimals: 18,
            coinGeckoID: "aave",
        },
        "0XFFC97D72E13E01096502CB8EB52DEE56F74DAD7B": {
            ticker: "aAAVE",
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
        "0XB9D7CB55F463405CDFBE4E90A6D2DF01C2B92BF1": {
            ticker: "aUNI",
            decimals: 18,
            coinGeckoID: "uniswap",
            versionL: 2
        },
        "0XB124541127A0A657F056D9DD06188C4F1B0E5AAB": {
            ticker: "aUNI",
            decimals: 18,
            coinGeckoID: "uniswap",
            version: 1
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
        "0X5165D24277CD063F5AC44EFD447B27025E888F37": {
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
        "0X8DAE6CB04688C62D939ED9B68D32BC62E49970B1": {
            ticker: "aCRV",
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
        "0X9FF58F4FFB29FA2266AB25E75E2A8B3503311656": {
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
        "0X35F6B052C598D933D69A4EEC4D04C73A191FE6C2": {
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
        },
        "0XDD974D5C2E2928DEA5F71B9825B8B646686BD200": {
            ticker: "KNC",
            decimals: 18,
            coinGeckoID: "kyber-network",
        },
        "0X9D91BE44C06D373A8A226E1F3B146956083803EB": {
            ticker: "aKNC",
            decimals: 18,
            coinGeckoID: "aave-knc",
            version: 1,
        },
        "0X39C6B3E42D6A679D7D776778FE880BC9487C2EDA": {
            ticker: "aKNC",
            decimals: 18,
            coinGeckoID: "aave-knc",
            version: 2,
        },
        "0XE41D2489571D322189246DAFA5EBDE1F4699F498": {
            ticker: "ZRX",
            decimals: 18,
            coinGeckoID: "0x",
        },
        "0X6FB0855C404E09C47C3FBCA25F08D4E41F9F062F": {
            ticker: "aZRX",
            decimals: 18,
            coinGeckoID: "aave-zrx",
            version: 1,
        },
        "0XDF7FF54AACACBFF42DFE29DD6144A69B629F8C9E": {
            ticker: "aZRX",
            decimals: 18,
            coinGeckoID: "aave-zrx",
            version: 2,
        },
        "0X0F5D2FB29FB7D3CFEE444A200298F468908CC942": {
            ticker: "MANA",
            decimals: 18,
            coinGeckoID: "decentraland",
        },
        "0X6FCE4A401B6B80ACE52BAAEFE4421BD188E76F6F": {
            ticker: "aMANA",
            decimals: 18,
            coinGeckoID: "aave-mana",
            version: 1,
        },
        "0XA685A61171BB30D4072B338C80CB7B2C865C873E": {
            ticker: "aMANA",
            decimals: 18,
            coinGeckoID: "aave-mana",
            version: 2,
        },
        "0X221657776846890989A759BA2973E427DFF5C9BB": {
            ticker: "REP",
            decimals: 18,
            coinGeckoID: "augur",
        },
        "0X71010A9D003445AC60C4E6A7017C1E89A477B438": {
            ticker: "aREP",
            decimals: 18,
            coinGeckoID: "augur",
            version: 1,
        },
        "0XF629CBD94D3791C9250152BD8DFBDF380E2A3B9C": {
            ticker: "ENJ",
            decimals: 18,
            coinGeckoID: "enjin-coin",
        },
        "0XAC6DF26A590F08DCC95D5A4705AE8ABBC88509EF": {
            ticker: "aENJ",
            decimals: 18,
            coinGeckoID: "enjin-coin",
            version: 1,
        },
        "0X712DB54DAA836B53EF1ECBB9C6BA3B9EFB073F40": {
            ticker: "aENJ",
            decimals: 18,
            coinGeckoID: "enjin-coin",
            version: 1,
        },
        // "":"ENJ",
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
