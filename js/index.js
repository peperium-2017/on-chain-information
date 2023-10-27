const { ethereum } = window;

const peperiumAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ipfs_hash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"desc","type":"string"}],"name":"setDescription","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isLocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lock","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenDescription","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
const taowarareAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_initialAmount","type":"uint256"},{"name":"_tokenName","type":"string"},{"name":"_decimalUnits","type":"uint8"},{"name":"_tokenSymbol","type":"string"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

let provider = false

const cards = [
    'KFPEPE',
    'PEPESTREET',
    'ZENPEPE',
    'PEPRESSIONISM',
    'PEPEBANKSY',
    'MONAPEPE',
    'LORDRARE',
    'BASEBALLPEPE',
    'BATPEPE',
    'HOTDOGPEPE',
    'KINGRARE',
    'ACCEPTRARE',
    'NEVERENDINGPEPE',
    'PEPEGOD',
    'PEPEGOLD',
    'NEWPEPE',
    'PEPETTE',
    'VAPORPEPE',
    'PEPESTENCIL',
    'GlitchPepe',
    'PEPERIUMCLASSIC',
    'CHILLPEPE',
    'RUINSOFPEPE',
    'GIGERPEPECITY',
    'PEPEZEUSLIGHT',
    'CRIMEANDPEPESHMENT',
    'PEPENEMSTEAK',
    'RPALPHASTIK',
    'UNDEADPEPE',
    'MHV',
    'PBJCAT',
    'TAOWARARE (Note: Fake Peperium)'
]
const contracts = [
    '0x648445e48093d999966375b30186D433fEF9c364',
    '0x51b41e61B654EA852679E374171F08f35119e255',
    '0xA3832b169Ac40c23d85eEb1D0c2e51FCAc5df5De',
    '0x8B990d8bBB502eaa09AE4bAdEb8ec85Acbe7FB66',
    '0x57E62ee19ffd8f73CD978282a45a1e5ab7341c96',
    '0xA87c5dcC2e24FACe553cFC0c04d8E22c94c117a2',
    '0xEd01ca51723C0F9ebc167e8E382A7cfA73735077',
    '0x99523add649D16e69E2eE913baC893e69e926444',
    '0x9F0bf0e983B227b2c026d4655B9fDF6cd435A66E',
    '0x8F94BC777CB8B6876Cd2410Da3a6F796733212f5',
    '0x97E5cC2F56E08C6338AC7907E1073a8049D4bC60',
    '0x20Cd103D4Ed989338E122Eb069d9cC51f497151E',
    '0xD3Fab082012b7482244379B77d9548495A029F54',
    '0x38A8E6f911aB6163b663f7fa414af03c7Ab4b35b',
    '0x08aAB3C173639a37C7E5254C2F1C153c3e3444B2',
    '0x76330651533B02B89c563352062265663E410923',
    '0x3aC136f428889E0E8d88B79940dEA547Eb7Ca00D',
    '0x2523f621ce57E0503c114FbD0181B4c385165513',
    '0x5921F43985a027ba74EE110b77DcE09B96De943E',
    '0x60E762fA4FCB2bA472B055D64fEbBFccA000ED6C',
    '0x6160A19EC62392ADf43Cc22c89C0193432216417',
    '0x4B5CF00AE4D5b1a8DC4E0D81f28e373aAdbe59d3',
    '0xbA7101b0aaf0F1cF655240ed519C4EcAc3394022',
    '0xDaa9CecfE002536574D7958c50950F8f545a9Bd4',
    '0xF10e9228221777920d413E74Aa40a54b33886Ac4',
    '0x11266bF3498FaBe08707C16F3BA7fbF526Cf9f98',
    '0xa9DDec7e4B31D63Aa9fEaf77190b242070483B24',
    '0x5443F7D80875AFD18737F2A5322161582373cE5e',
    '0x0273b0846a9877af88b3F080fB963d8f51679996',
    '0xC8a1464d5936C9dcB033dAA7fc198215E7538292',
    '0x7469580d483e9832B9C68676b5EA17141bE97df2',
    '0x95907077585b09068A0d8d1185AAB872ec1836c0'
]

if (ethereum) {
    provider = new ethers.providers.Web3Provider(ethereum)
}

if (!provider) {
    console.error("Your browser is not web3 enabled.")
    error.classList.remove('d-none')
}

const cardsSelect = document.querySelector('#cards')
const loader = document.querySelector('#loader')
const info = document.querySelector('#info')
const error = document.querySelector('#error')
const contractInfo = document.querySelector('#contract')
const infoTableBody = document.querySelector('#info-table tbody')

async function getContractInfo(contractAddress) {
    try {
        const abi = contractAddress === '0x95907077585b09068a0d8d1185aab872ec1836c0' ? taowarareAbi : peperiumAbi
        const contract = await new ethers.Contract(contractAddress, abi, provider)
        const query_fields = abi.filter(i => i.constant && i.inputs.length === 0).map(i => i.name)
        
        let obj = {}
        let promises = []

        for(let i=0; i<query_fields.length; i++) {
            let q = query_fields[i]
            let data = await contract[q]()
            promises.push(data)

            obj[`${q}`] = data.toString()
        }

        Promise.all(promises).then(() => {
            let tableBodyHTML = ''

            Object.entries(obj).forEach(([key, value]) => {
                switch(key) {
                    case 'owner': {
                        tableBodyHTML += `<tr><td>${key}</td><td><a href="https://etherscan.io/address/${value}" target="_blank">${value}</a></td></tr>`
                        break
                    }
                    case 'ipfs_hash': {
                        tableBodyHTML += `<tr><td>${key}</td><td><a href="https://ipfs.io/ipfs/${value}" target="_blank">${value}</a></td></tr>`
                        break
                    }
                    default: {
                        tableBodyHTML += `<tr><td>${key}</td><td>${value}</td></tr>`
                        break
                    }
                }
            })

            contractInfo.innerHTML = `<a href="https://etherscan.io/address/${contractAddress}" target="_blank">${contractAddress}</a>`
            infoTableBody.innerHTML = tableBodyHTML
            loader.classList.add('d-none')
            info.classList.remove('d-none')
        })
    } catch(e) {
        console.error(e)
        loader.classList.add('d-none')
        error.classList.remove('d-none')
    }
}

let html = '<option disabled selected value> -- Select a card -- </option>'
cards.forEach((card, i) => {
    html += `<option value="${contracts[i].toLowerCase()}">${card.toUpperCase()}</option>`
})
cardsSelect.innerHTML = html

cardsSelect.addEventListener('change', async function(e) {
    e.preventDefault();

    loader.classList.remove('d-none')
    info.classList.add('d-none')

    getContractInfo(e.target.value)
})