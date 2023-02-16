import {NetworkEnum} from '@1inch/fusion-sdk'

export type OneInchSwapParams = {
    fromToken: string
    toToken: string
    amount: string
    fromAddress: string
    slippage: number
    disableEstimate?: boolean
    protocols?: string[]
}

export type OneInchApiConfig = {
    url: string
    network: NetworkEnum
}

export type OneInchApiSwapResponse = {
    fromToken: TokenInfo
    toToken: TokenInfo
    toTokenAmount: string
    fromTokenAmount: string
    protocols: PathView[][][]
    tx: Tx
}

export type PathView = {
    name: string
    part: number
    fromTokenAddress: string
    toTokenAddress: string
}

export interface TokenInfo {
    symbol: string
    name: string
    address: string
    decimals: number
    logoURI: string
    isCustom?: boolean
    isFOT?: boolean
}

export type Tx = {
    from: string
    to: string
    data: string
    value: string
    gas: number
    gasPrice: string
}