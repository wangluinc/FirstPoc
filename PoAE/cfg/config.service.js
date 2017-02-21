/**
 * Copyright 2016 Everex https://everex.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sample configuration file for Chainy service.
 *
 * Copy this file to config.service.js before making any changes.
 */

module.exports = {
    
    server: {
        address: '127.0.0.1',
        port: 8344
    },
    ethereum: {
        url: 'http://127.0.0.1:8545',
        testnet: false
    },
    // Contract address 
    contract: '0xdeddf1db8c799c46a9cde3b3d98a2f56f62270ba',
    // Contract ABI
    ABI: [
        {constant:true, inputs:[{name:"code",type:"string"}], name:"getChainyData", outputs:[{name:"",type:"string"}], type:"function"},
        {constant:true, inputs:[{name:"code",type:"string"}], name:"getChainyTimestamp", outputs:[{name:"",type:"uint256"}],type:"function"},
        { "constant": true, "inputs": [ { "name": "code", "type": "string" } ], "name": "getChainySender", "outputs": [ { "name": "", "type": "address", "value": "0x0000000000000000000000000000000000000000" } ], "type": "function" }
    ],
    // Gas limit (4.5M is near block limit)
    gasLimit: "0x300000",
    // Command code
    cmd: '0xac3e7d24',
    // Log topic
    topic: "0xdad5c3eecfdb62dd69e6e72053b88029e1d6277d4bc773c00fef243982adcb7d",    
    // Autopublish sender

    blockOffset: 666,
    
    sender: {
        // address: 'Ox9da26fc2e1d6ad9fdd46138906b0104ae68a65d8',
        // pk: '0xb6a03207128827eaae0d31d97a7a6243de31f2baf99eabd764e33389ecf436fc'
        // address: '0xbd2d69e3e68e1ab3944a865b3e566ca5c48740da',
        // pk: 'b35b8064c5c373629a05cc3ef39789ba4dacd404e6e864214ade934c198b636f'
        'address': '0x9da26fc2e1d6ad9fdd46138906b0104ae68a65d8',
        'pk': 'b6a03207128827eaae0d31d97a7a6243de31f2baf99eabd764e33389ecf436fc'
    }
    
}
