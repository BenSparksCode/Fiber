export const LENDING_POOL_V1 = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_borrowRateMode",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_borrowRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_originationFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_borrowBalanceIncrease",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "_referral",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "Borrow",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint16",
                "name": "_referral",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_target",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_totalFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_protocolFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "FlashLoan",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_collateral",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_purchaseAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_liquidatedCollateralAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_accruedBorrowInterest",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_liquidator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "_receiveAToken",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "LiquidationCall",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_collateral",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_feeLiquidated",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_liquidatedCollateralForFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "OriginationFeeLiquidated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_newStableRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_borrowBalanceIncrease",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "RebalanceStableBorrowRate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "RedeemUnderlying",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_repayer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amountMinusFees",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fees",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_borrowBalanceIncrease",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "Repay",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "ReserveUsedAsCollateralDisabled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "ReserveUsedAsCollateralEnabled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_newRateMode",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_newRate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_borrowBalanceIncrease",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_timestamp",
                "type": "uint256"
            }
        ],
        "name": "Swap",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "LENDINGPOOL_REVISION",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "UINT_MAX_VALUE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "addressesProvider",
        "outputs": [
            {
                "internalType": "contract LendingPoolAddressesProvider",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "core",
        "outputs": [
            {
                "internalType": "contract LendingPoolCore",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "dataProvider",
        "outputs": [
            {
                "internalType": "contract LendingPoolDataProvider",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "parametersProvider",
        "outputs": [
            {
                "internalType": "contract LendingPoolParametersProvider",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract LendingPoolAddressesProvider",
                "name": "_addressesProvider",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "_referralCode",
                "type": "uint16"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_aTokenBalanceAfterRedeem",
                "type": "uint256"
            }
        ],
        "name": "redeemUnderlying",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_interestRateMode",
                "type": "uint256"
            },
            {
                "internalType": "uint16",
                "name": "_referralCode",
                "type": "uint16"
            }
        ],
        "name": "borrow",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_onBehalfOf",
                "type": "address"
            }
        ],
        "name": "repay",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            }
        ],
        "name": "swapBorrowRateMode",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "rebalanceStableBorrowRate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_useAsCollateral",
                "type": "bool"
            }
        ],
        "name": "setUserUseReserveAsCollateral",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_collateral",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_purchaseAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_receiveAToken",
                "type": "bool"
            }
        ],
        "name": "liquidationCall",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_receiver",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_params",
                "type": "bytes"
            }
        ],
        "name": "flashLoan",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            }
        ],
        "name": "getReserveConfigurationData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "ltv",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidationThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidationBonus",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "interestRateStrategyAddress",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "usageAsCollateralEnabled",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "borrowingEnabled",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "stableBorrowRateEnabled",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            }
        ],
        "name": "getReserveData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalLiquidity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "availableLiquidity",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBorrowsStable",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBorrowsVariable",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "variableBorrowRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "stableBorrowRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "averageStableBorrowRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "utilizationRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "variableBorrowIndex",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "aTokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint40",
                "name": "lastUpdateTimestamp",
                "type": "uint40"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserAccountData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "totalLiquidityETH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalCollateralETH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBorrowsETH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalFeesETH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "availableBorrowsETH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentLiquidationThreshold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ltv",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "healthFactor",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "_reserve",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserReserveData",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "currentATokenBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentBorrowBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "principalBorrowBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowRateMode",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "originationFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "variableBorrowIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastUpdateTimestamp",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "usageAsCollateralEnabled",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

export const LENDING_POOL_V2 = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": false, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "onBehalfOf", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "borrowRateMode", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "borrowRate", "type": "uint256" }, { "indexed": true, "internalType": "uint16", "name": "referral", "type": "uint16" }], "name": "Borrow", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": false, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "onBehalfOf", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "uint16", "name": "referral", "type": "uint16" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "target", "type": "address" }, { "indexed": true, "internalType": "address", "name": "initiator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "premium", "type": "uint256" }, { "indexed": false, "internalType": "uint16", "name": "referralCode", "type": "uint16" }], "name": "FlashLoan", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "collateralAsset", "type": "address" }, { "indexed": true, "internalType": "address", "name": "debtAsset", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "debtToCover", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "liquidatedCollateralAmount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "liquidator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "receiveAToken", "type": "bool" }], "name": "LiquidationCall", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }], "name": "RebalanceStableBorrowRate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "repayer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Repay", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "liquidityRate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stableBorrowRate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "variableBorrowRate", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "liquidityIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "variableBorrowIndex", "type": "uint256" }], "name": "ReserveDataUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }], "name": "ReserveUsedAsCollateralDisabled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }], "name": "ReserveUsedAsCollateralEnabled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "rateMode", "type": "uint256" }], "name": "Swap", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "reserve", "type": "address" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "FLASHLOAN_PREMIUM_TOTAL", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "LENDINGPOOL_REVISION", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_NUMBER_RESERVES", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "interestRateMode", "type": "uint256" }, { "internalType": "uint16", "name": "referralCode", "type": "uint16" }, { "internalType": "address", "name": "onBehalfOf", "type": "address" }], "name": "borrow", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "onBehalfOf", "type": "address" }, { "internalType": "uint16", "name": "referralCode", "type": "uint16" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "balanceFromBefore", "type": "uint256" }, { "internalType": "uint256", "name": "balanceToBefore", "type": "uint256" }], "name": "finalizeTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiverAddress", "type": "address" }, { "internalType": "address[]", "name": "assets", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "modes", "type": "uint256[]" }, { "internalType": "address", "name": "onBehalfOf", "type": "address" }, { "internalType": "bytes", "name": "params", "type": "bytes" }, { "internalType": "uint16", "name": "referralCode", "type": "uint16" }], "name": "flashLoan", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAddressesProvider", "outputs": [{ "internalType": "contract ILendingPoolAddressesProvider", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "getConfiguration", "outputs": [{ "components": [{ "internalType": "uint256", "name": "data", "type": "uint256" }], "internalType": "struct DataTypes.ReserveConfigurationMap", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "getReserveData", "outputs": [{ "components": [{ "components": [{ "internalType": "uint256", "name": "data", "type": "uint256" }], "internalType": "struct DataTypes.ReserveConfigurationMap", "name": "configuration", "type": "tuple" }, { "internalType": "uint128", "name": "liquidityIndex", "type": "uint128" }, { "internalType": "uint128", "name": "variableBorrowIndex", "type": "uint128" }, { "internalType": "uint128", "name": "currentLiquidityRate", "type": "uint128" }, { "internalType": "uint128", "name": "currentVariableBorrowRate", "type": "uint128" }, { "internalType": "uint128", "name": "currentStableBorrowRate", "type": "uint128" }, { "internalType": "uint40", "name": "lastUpdateTimestamp", "type": "uint40" }, { "internalType": "address", "name": "aTokenAddress", "type": "address" }, { "internalType": "address", "name": "stableDebtTokenAddress", "type": "address" }, { "internalType": "address", "name": "variableDebtTokenAddress", "type": "address" }, { "internalType": "address", "name": "interestRateStrategyAddress", "type": "address" }, { "internalType": "uint8", "name": "id", "type": "uint8" }], "internalType": "struct DataTypes.ReserveData", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "getReserveNormalizedIncome", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }], "name": "getReserveNormalizedVariableDebt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getReservesList", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getUserAccountData", "outputs": [{ "internalType": "uint256", "name": "totalCollateralETH", "type": "uint256" }, { "internalType": "uint256", "name": "totalDebtETH", "type": "uint256" }, { "internalType": "uint256", "name": "availableBorrowsETH", "type": "uint256" }, { "internalType": "uint256", "name": "currentLiquidationThreshold", "type": "uint256" }, { "internalType": "uint256", "name": "ltv", "type": "uint256" }, { "internalType": "uint256", "name": "healthFactor", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getUserConfiguration", "outputs": [{ "components": [{ "internalType": "uint256", "name": "data", "type": "uint256" }], "internalType": "struct DataTypes.UserConfigurationMap", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "aTokenAddress", "type": "address" }, { "internalType": "address", "name": "stableDebtAddress", "type": "address" }, { "internalType": "address", "name": "variableDebtAddress", "type": "address" }, { "internalType": "address", "name": "interestRateStrategyAddress", "type": "address" }], "name": "initReserve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract ILendingPoolAddressesProvider", "name": "provider", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "collateralAsset", "type": "address" }, { "internalType": "address", "name": "debtAsset", "type": "address" }, { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "debtToCover", "type": "uint256" }, { "internalType": "bool", "name": "receiveAToken", "type": "bool" }], "name": "liquidationCall", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "user", "type": "address" }], "name": "rebalanceStableBorrowRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rateMode", "type": "uint256" }, { "internalType": "address", "name": "onBehalfOf", "type": "address" }], "name": "repay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "configuration", "type": "uint256" }], "name": "setConfiguration", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "val", "type": "bool" }], "name": "setPause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "rateStrategyAddress", "type": "address" }], "name": "setReserveInterestRateStrategyAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "bool", "name": "useAsCollateral", "type": "bool" }], "name": "setUserUseReserveAsCollateral", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "rateMode", "type": "uint256" }], "name": "swapBorrowRateMode", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }], "name": "withdraw", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }]
