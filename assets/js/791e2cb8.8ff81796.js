"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9773],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=i,f=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6537:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:2},p="11.2  Chia Pool Protocol 1.0 Specification",s={unversionedId:"11pooling/specification",id:"11pooling/specification",isDocsHomePage:!1,title:"11.2  Chia Pool Protocol 1.0 Specification",description:"This is the initial version of the Chia Pool Protocol. It is designed to be simple, and to be extended later. It relies on farmers having smart coins (referred to as plot NFTs in GUI + CLI) which allow them to switch between pools by making transactions on the blockchain. Furthermore, it decreases the reliance on pools for block production, since the protocol only handles distribution of rewards, and it protects against pools or farmers acting maliciously.",source:"@site/docs/11pooling/specification.md",sourceDirName:"11pooling",slug:"/11pooling/specification",permalink:"/docs/11pooling/specification",editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/11pooling/specification.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"11.1 Summary",permalink:"/docs/11pooling/pooling"},next:{title:"12.1 Chia RPC API",permalink:"/docs/12rpcs/rpcs"}},c=[{value:"Security considerations",id:"security-considerations",children:[]},{value:"Parties",id:"parties",children:[]},{value:"Farmer identification",id:"farmer-identification",children:[]},{value:"Farmer authentication",id:"farmer-authentication",children:[]},{value:"HTTPS Endpoints Summary",id:"https-endpoints-summary",children:[]},{value:"Error codes",id:"error-codes",children:[]},{value:"Signature validation",id:"signature-validation",children:[]},{value:"Pool URL",id:"pool-url",children:[]},{value:"GET /pool_info",id:"get-pool_info",children:[]},{value:"GET /farmer",id:"get-farmer",children:[{value:"Parameter",id:"parameter",children:[]}]},{value:"POST /farmer",id:"post-farmer",children:[]},{value:"PUT /farmer",id:"put-farmer",children:[]},{value:"POST /partial",id:"post-partial",children:[]},{value:"GET /login",id:"get-login",children:[]},{value:"Difficulty",id:"difficulty",children:[]},{value:"Points",id:"points",children:[]}],d={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"112--chia-pool-protocol-10-specification"},"11.2  Chia Pool Protocol 1.0 Specification"),(0,o.kt)("p",null,"This is the initial version of the Chia Pool Protocol. It is designed to be simple, and to be extended later. It relies on farmers having smart coins (referred to as plot NFTs in GUI + CLI) which allow them to switch between pools by making transactions on the blockchain. Furthermore, it decreases the reliance on pools for block production, since the protocol only handles distribution of rewards, and it protects against pools or farmers acting maliciously."),(0,o.kt)("h2",{id:"security-considerations"},"Security considerations"),(0,o.kt)("p",null,"The pool must ensure that partials arrive quickly, faster than the 28-second time limit of inclusion into the blockchain. This allows farmers that have slow setups to detect issues."),(0,o.kt)("p",null,"The Pool server must check that the ",(0,o.kt)("inlineCode",{parentName:"p"},"pool_contract_puzzle_hash")," a.k.a. ",(0,o.kt)("inlineCode",{parentName:"p"},"p2_singleton_puzzle_hash")," matches the\npuzzle that they expect. Otherwise, the pool has no guarantee that users will not attempt to claim block rewards\nfor themselves, and immediately leave the pool, something that the provided smart contract prevents."),(0,o.kt)("p",null,"The Chia client must only connect to the pool configuration URL via HTTPS over TLS >= 1.2. This is to\nprevent session hijacking, leading to user funds being stolen."),(0,o.kt)("h2",{id:"parties"},"Parties"),(0,o.kt)("p",null,"The parties involved in the pool protocol are the pool operator and farmers. Each farmer is running\na farmer process, and any number of harvester processes connected to that farmer process. The full node can either be\nrun by the farmer (the default in the Chia GUI application), or run by the pool operator. If the farmer does not want\nto run a full node, they can configure their node to connect to a remote full node."),(0,o.kt)("p",null,"A pool operator can support any number of farmers."),(0,o.kt)("h2",{id:"farmer-identification"},"Farmer identification"),(0,o.kt)("p",null,"A farmer can be uniquely identified by the identifier of the farmer's singleton on the blockchain, this is what\n",(0,o.kt)("inlineCode",{parentName:"p"},"launcher_id")," refers to. The ",(0,o.kt)("inlineCode",{parentName:"p"},"launcher_id")," can be used as a primary key in a database. The pool must periodically check\nthe singleton's state on the blockchain to validate that it's farming to the pool, and not leaving or farming to another\npool."),(0,o.kt)("h2",{id:"farmer-authentication"},"Farmer authentication"),(0,o.kt)("p",null,"For the farmer to authenticate to the pool the following time based authentication token scheme must be added to the\nsigning messages of some endpoints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"authentication_token = current_utc_minutes / authentication_token_timeout\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token_timeout")," is a configuration parameter of the pool which is also included in the\n",(0,o.kt)("a",{parentName:"p",href:"#get-pool_info"},"GET /pool_info")," response that must be respected by the farmer. Whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"current_utc_minutes")," is the\nlocal UTC timestamp in ",(0,o.kt)("strong",{parentName:"p"},"minutes")," at the moment of signing. The local clock should ideally be in sync with a time\nsynchronization protocol e.g., NTP. The authentication token is usually included in a signed payload."),(0,o.kt)("h2",{id:"https-endpoints-summary"},"HTTPS Endpoints Summary"),(0,o.kt)("p",null,"The pool protocol consists of several HTTPS endpoints which return JSON responses. The HTTPS server can run on any port,\nbut must be running with TLS enabled (using a CA approved certificate), and with pipelining enabled.\nAll bytes values are encoded as hex with optional 0x in front. Clients are also expected to run with pipelining."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-pool_info"},"GET /pool_info")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-farmer"},"GET /farmer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#post-farmer"},"POST /farmer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#put-farmer"},"PUT /farmer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#post-partial"},"POST /partial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-login"},"GET /login (Optional)"))),(0,o.kt)("h2",{id:"error-codes"},"Error codes"),(0,o.kt)("p",null,"A failed endpoint will always return a JSON object with an error code and an\nenglish error message as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"error_code": 0, "error_message": ""}\n')),(0,o.kt)("p",null,"The following errors may occur:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Error code"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x01"),(0,o.kt)("td",{parentName:"tr",align:null},"The provided signage point has been reverted")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x02"),(0,o.kt)("td",{parentName:"tr",align:null},"Received partial too late")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x03"),(0,o.kt)("td",{parentName:"tr",align:null},"Not found")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x04"),(0,o.kt)("td",{parentName:"tr",align:null},"Proof of space invalid")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x05"),(0,o.kt)("td",{parentName:"tr",align:null},"Proof of space not good enough")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x06"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid difficulty")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x07"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid signature")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x08"),(0,o.kt)("td",{parentName:"tr",align:null},"Web-Server raised an exception")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x09"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid puzzle hash")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x0A"),(0,o.kt)("td",{parentName:"tr",align:null},"Farmer not known")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x0B"),(0,o.kt)("td",{parentName:"tr",align:null},"Farmer already known")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x0C"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid authentication public key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x0D"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid payout instructions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x0E"),(0,o.kt)("td",{parentName:"tr",align:null},"Invalid singleton")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x0F"),(0,o.kt)("td",{parentName:"tr",align:null},"Delay time too short")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0x10"),(0,o.kt)("td",{parentName:"tr",align:null},"Request failed")))),(0,o.kt)("h2",{id:"signature-validation"},"Signature validation"),(0,o.kt)("p",null,"Most of the endpoints require signature validation. The validation requires serialization of the endpoints payloads\nto calculate the message hash which is done like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"message_hash = sha256(serialized_payload)\n")),(0,o.kt)("p",null,"The serialized payload must follow the ",(0,o.kt)("inlineCode",{parentName:"p"},"Streamable")," standard defined\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/util/streamable.py"},"here"),"."),(0,o.kt)("h2",{id:"pool-url"},"Pool URL"),(0,o.kt)("p",null,"The pool URL is the url that farmers use to connect to the pool. The subdomains, port, and path are optional. The client\nwill use 443 if there is no port. Note that the trailing slash must NOT be present. Everything must be lower case."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://subdomain.domain.tld:port/path\n")),(0,o.kt)("h2",{id:"get-pool_info"},"GET /pool_info"),(0,o.kt)("p",null,"This takes no arguments, and allows clients to fetch information about a pool. It is called right before joining a pool,\nwhen the farmer enters the pool URL into the client. This allows the farmer to see information about the pool, and\ndecide whether or not to join. It also allows the farmer to set the correct parameters in their singleton on the\nblockchain. Warning to client implementers: if displaying any of this information, make sure to account for malicious\nscripts and JS injections. It returns a JSON response with the following data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": "(example) The Reference Pool allows you to pool with low fees, paying out daily using Chia.",\n    "fee": 0.01,\n    "logo_url": "https://www.chia.net/img/chia_logo.svg",\n    "minimum_difficulty": 10,\n    "name": "The Reference Pool",\n    "protocol_version": 1,\n    "relative_lock_height": 100,\n    "target_puzzle_hash": "0x344587cf06a39db471d2cc027504e8688a0a67cce961253500c956c73603fd58",\n    "authentication_token_timeout": 5\n}\n')),(0,o.kt)("h4",{id:"description"},"description"),(0,o.kt)("p",null,"The description is a short paragraph that can be displayed in GUIs when the farmer enters a pool URL."),(0,o.kt)("h4",{id:"fee"},"fee"),(0,o.kt)("p",null,"The fee that the pool charges by default, a number between 0.0 (0.0%) and 1.0 (100.0%). This does not include blockchain\ntransaction fees."),(0,o.kt)("h4",{id:"logo_url"},"logo_url"),(0,o.kt)("p",null,"A URL for a pool logo that the client can display in the UI. This is optional for v1.0."),(0,o.kt)("h4",{id:"minimum_difficulty"},"minimum_difficulty"),(0,o.kt)("p",null,"The minimum difficulty that the pool supports. This will also be the default that farmers start sending proofs for."),(0,o.kt)("h4",{id:"name"},"name"),(0,o.kt)("p",null,"Name of the pool, this is only for display purposes and does not go on the blockchain."),(0,o.kt)("h4",{id:"protocol_version"},"protocol_version"),(0,o.kt)("p",null,"The pool protocol version supported by the pool."),(0,o.kt)("h4",{id:"relative_lock_height"},"relative_lock_height"),(0,o.kt)("p",null,"The number of blocks (confirmations) that a user must wait between the point when they start escaping a pool, and the\npoint at which they can finalize their pool switch. Must be less than 4608 (approximately 24 hours)."),(0,o.kt)("h4",{id:"target_puzzle_hash"},"target_puzzle_hash"),(0,o.kt)("p",null,"This is the target of where rewards will be sent to from the singleton. Controlled by the pool."),(0,o.kt)("h4",{id:"authentication_token_timeout"},"authentication_token_timeout"),(0,o.kt)("p",null,"The time in ",(0,o.kt)("strong",{parentName:"p"},"minutes")," for an ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token")," to be valid, see ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication"),"."),(0,o.kt)("h2",{id:"get-farmer"},"GET /farmer"),(0,o.kt)("p",null,"Get the latest information for a farmer."),(0,o.kt)("p",null,"Request parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- launcher_id\n- authentication_token\n- signature\n")),(0,o.kt)("p",null,"Example request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://poolurl.com/farmer/launcher_id=:launcher_id&authentication_token=:token&signature=:signature\n")),(0,o.kt)("p",null,"Successful response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "authentication_public_key": "0x970e181ae45435ae696508a78012dc80548c334cf29676ea6ade7049eb9d2b9579cc30cb44c3fd68d35a250cfbc69e29",\n    "payout_instructions": "0xc2b08e41d766da4116e388357ed957d04ad754623a915f3fd65188a8746cf3e8",\n    "current_difficulty": 10,\n    "current_points": 10\n}\n')),(0,o.kt)("h3",{id:"parameter"},"Parameter"),(0,o.kt)("h4",{id:"launcher_id"},"launcher_id"),(0,o.kt)("p",null,"The unique identifier of the farmer's singleton, see ",(0,o.kt)("a",{parentName:"p",href:"#farmer-identification"},"Farmer identification"),"."),(0,o.kt)("h4",{id:"authentication_token"},"authentication_token"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("h4",{id:"signature"},"signature"),(0,o.kt)("p",null,"This is a BLS signature of the hashed serialization of the following data in the given order:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Element"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"method_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"launcher_id"),(0,o.kt)("td",{parentName:"tr",align:null},"bytes32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target_puzzle_hash"),(0,o.kt)("td",{parentName:"tr",align:null},"bytes32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"authentication_token"),(0,o.kt)("td",{parentName:"tr",align:null},"uint64")))),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"method_name")," must be the serialized string ",(0,o.kt)("inlineCode",{parentName:"p"},'"get_farmer"'),", the parameters must be serialized and hashed\naccording to ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"Signature validation")," and the signature must be signed by the private key of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_public_key")," using the Augmented Scheme in the BLS IETF spec."),(0,o.kt)("p",null,"where the parameter must be serialized and hashed according to ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"Signature validation")," and the\nsignature must be signed by the private key of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_public_key")," using the Augmented Scheme in the BLS\nIETF spec."),(0,o.kt)("p",null,"Note: The pool MUST return the current points balance, which is the total number of points found since the last\npayout for that user."),(0,o.kt)("h2",{id:"post-farmer"},"POST /farmer"),(0,o.kt)("p",null,"Register a farmer with the pool. This is required once before submitting the first partial."),(0,o.kt)("p",null,"Request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "payload": {\n        "launcher_id": "0xae4ef3b9bfe68949691281a015a9c16630fc8f66d48c19ca548fb80768791afa",\n        "authentication_token": 27062279,\n        "authentication_public_key": "0x970e181ae45435ae696508a78012dc80548c334cf29676ea6ade7049eb9d2b9579cc30cb44c3fd68d35a250cfbc69e29",\n        "payout_instructions": "0xc2b08e41d766da4116e388357ed957d04ad754623a915f3fd65188a8746cf3e8",\n        "suggested_difficulty": 10\n    },\n    "signature": "0xa078dc1462bbcdec7cd651c5c3d7584ac6c6a142e049c7790f3b0ee8768ed6326e3a639f949b2293469be561adfa1c57130f64334994f53c1bd12e59579e27127fbabadc5e8793a2ef194a5a22ac832e92dcb6ad9a0d33bd264726f6e8df6aad"\n}\n')),(0,o.kt)("p",null,"Successful response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"welcome_message" : "Welcome to the reference pool. Happy farming."}\n')),(0,o.kt)("p",null,"A successful response must always contain a welcome message which must be defined by the pool."),(0,o.kt)("h4",{id:"payload"},"payload"),(0,o.kt)("h4",{id:"payloadlauncher_id"},"payload.launcher_id"),(0,o.kt)("p",null,"The unique identifier of the farmer's singleton, see ",(0,o.kt)("a",{parentName:"p",href:"#farmer-identification"},"Farmer identification"),"."),(0,o.kt)("h4",{id:"payloadauthentication_token"},"payload.authentication_token"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("h4",{id:"payloadauthentication_public_key"},"payload.authentication_public_key"),(0,o.kt)("p",null,"The public key of the authentication key, which is a temporary key used by the farmer to sign requests\nto the pool. It is authorized by the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_key"),", so that the owner key can be kept more secure. The pool should reject\nrequests made with outdated ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_keys"),". These key can be changed using ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT /farmer"),", which is signed with\nthe owner key."),(0,o.kt)("h4",{id:"payloadpayout_instructions"},"payload.payout_instructions"),(0,o.kt)("p",null,"These are the instructions for how the farmer wants to get paid. By default this will be an XCH address, but it can\nbe set to any string with a size of less than 1024 characters, so it can represent another blockchain or payment\nsystem identifier."),(0,o.kt)("h4",{id:"payloadsuggested_difficulty"},"payload.suggested_difficulty"),(0,o.kt)("p",null,"A request from the farmer to update the difficulty. Can be ignored or respected by the pool. However, this should only\nbe respected if the authentication public key is the most recent one seen for this farmer."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#difficulty"},"Difficulty")," for more details about the impact of the difficulty."),(0,o.kt)("h4",{id:"signature-1"},"signature"),(0,o.kt)("p",null,"This is a BLS signature of the hashed serialization of the payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sha256(PostFarmerPayload)\n")),(0,o.kt)("p",null,"signed by the private key of the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner_public_key")," using the Augmented Scheme in the BLS IETF spec."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"streamable")," class ",(0,o.kt)("inlineCode",{parentName:"p"},"PostFarmerPayload")," in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/pool_protocol.py"},"pool protocol"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("h2",{id:"put-farmer"},"PUT /farmer"),(0,o.kt)("p",null,"Allows farmers to update their information on the pool."),(0,o.kt)("p",null,"Request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "payload": {\n        "launcher_id": "0xae4ef3b9bfe68949691281a015a9c16630fc8f66d48c19ca548fb80768791afa",\n        "authentication_token": 27062279,\n        "authentication_public_key": "0x970e181ae45435ae696508a78012dc80548c334cf29676ea6ade7049eb9d2b9579cc30cb44c3fd68d35a250cfbc69e29",\n        "payout_instructions": "0xc2b08e41d766da4116e388357ed957d04ad754623a915f3fd65188a8746cf3e8",\n        "suggested_difficulty": 10\n    },\n    "signature": "0xa078dc1462bbcdec7cd651c5c3d7584ac6c6a142e049c7790f3b0ee8768ed6326e3a639f949b2293469be561adfa1c57130f64334994f53c1bd12e59579e27127fbabadc5e8793a2ef194a5a22ac832e92dcb6ad9a0d33bd264726f6e8df6aad"\n}\n')),(0,o.kt)("p",null,"For a description of the request body entries see the corresponding keys in ",(0,o.kt)("a",{parentName:"p",href:"#post-farmer"},"POST /farmer"),". The values\nprovided with the key/value pairs are used to update the existing values on the server. All entries, except\n",(0,o.kt)("inlineCode",{parentName:"p"},"launcher_id"),", are optional but there must be at least one of them."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"streamable")," class ",(0,o.kt)("inlineCode",{parentName:"p"},"PutFarmerPayload")," in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/pool_protocol.py"},"pool protocol")," for details\nand ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("p",null,"Successful response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "authentication_public_key": true,\n  "payout_instructions": true,\n  "suggested_difficulty": true\n}\n')),(0,o.kt)("p",null,"A successful response must always contain one key/value pair for each entry provided in the request body. The value\nmust be ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," if the entry has been updated or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," if the value was the same as the current value."),(0,o.kt)("p",null,"See below for an example body to only update the authentication key:"),(0,o.kt)("p",null,"Example to update ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_public_key"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "payload": {\n        "launcher_id": "0xae4ef3b9bfe68949691281a015a9c16630fc8f66d48c19ca548fb80768791afa",\n        "authentication_public_key": "0x970e181ae45435ae696508a78012dc80548c334cf29676ea6ade7049eb9d2b9579cc30cb44c3fd68d35a250cfbc69e29"\n    },\n    "signature": "0xa078dc1462bbcdec7cd651c5c3d7584ac6c6a142e049c7790f3b0ee8768ed6326e3a639f949b2293469be561adfa1c57130f64334994f53c1bd12e59579e27127fbabadc5e8793a2ef194a5a22ac832e92dcb6ad9a0d33bd264726f6e8df6aad"\n}\n')),(0,o.kt)("h2",{id:"post-partial"},"POST /partial"),(0,o.kt)("p",null,"This is a partial submission from the farmer to the pool operator."),(0,o.kt)("p",null,"Request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload": {\n    "launcher_id": "0xae4ef3b9bfe68949691281a015a9c16630fc8f66d48c19ca548fb80768791afa",\n    "authentication_token": 27062279,\n    "proof_of_space": {\n      "challenge": "0xe0e55d45eef8d53a6b68220abeec8f14f57baaa80dbd7b37430e42f9ac6e2c0e",\n      "pool_contract_puzzle_hash": "0x9e3e9b37b54cf6c7467e277b6e4ca9ab6bdea53cdc1d79c000dc95b6a3908a3b",\n      "plot_public_key": "0xa7ad70989cc8f18e555e9b698d197cdfc32465e0b99fd6cf5fdbac8aa2da04b0704ba04d2d50d852402f9dd6eec47a4d",\n      "size": 32,\n      "proof": "0xb2cd6374c8db249ad3b638199dbb6eb9eaefe55042cef66c43cf1e31161f4a1280455d8b53c2823c747fd4f8823c44de3a52cc85332431630857c359935660c3403ae3a92728d003dd66ef5966317cd49894d265a3e4c43f0530a1192874ed327e6f35862a25dfb67c5d0d573d078b4b8ba9bfb1cce52fd17939ae9d7033d3aa09d6c449e392ba2472a1fecf992abcc51c3bf5d56a72fef9900e79b8dba88a5afc39e04993325a0cd6b67757355b836f"\n    },\n    "sp_hash": "0x4c52796ca4ff775fbcdac90140c12270d26a37724ad77988535d58b376332533",\n    "end_of_sub_slot": false,\n    "harvester_id": "0xb9d8de98ec5c026f1167b0b587715d7137f43b6d1d40b81d9aac6dc8355fde28"\n  },\n  "aggregate_signature": "0xa078dc1462bbcdec7cd651c5c3d7584ac6c6a142e049c7790f3b0ee8768ed6326e3a639f949b2293469be561adfa1c57130f64334994f53c1bd12e59579e27127fbabadc5e8793a2ef194a5a22ac832e92dcb6ad9a0d33bd264726f6e8df6aad"\n}\n')),(0,o.kt)("p",null,"Successful response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"new_difficulty": 10}\n')),(0,o.kt)("p",null,"A successful response must always contain the new difficulty which must be respected by the farmer."),(0,o.kt)("h4",{id:"payload-1"},"payload"),(0,o.kt)("p",null,"This is the main payload of the partial, which is signed by two keys: ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"plot_key"),"."),(0,o.kt)("h4",{id:"payloadlauncher_id-1"},"payload.launcher_id"),(0,o.kt)("p",null,"The unique identifier of the farmer's singleton, see ",(0,o.kt)("a",{parentName:"p",href:"#farmer-identification"},"Farmer identification"),"."),(0,o.kt)("h4",{id:"payloadauthentication_token-1"},"payload.authentication_token"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("h4",{id:"payloadproof_of_space"},"payload.proof_of_space"),(0,o.kt)("p",null,"The proof of space in chia-blockchain format."),(0,o.kt)("h4",{id:"payloadproof_of_spacechallenge"},"payload.proof_of_space.challenge"),(0,o.kt)("p",null,"The challenge of the proof of space, computed from the signage point or end of subslot."),(0,o.kt)("h4",{id:"payloadproof_of_spacepool_contract_puzzle_hash"},"payload.proof_of_space.pool_contract_puzzle_hash"),(0,o.kt)("p",null,"The puzzle hash that is encoded in the plots, equivalent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"p2_singleton_puzzle_hash"),". This is the first address\nthat the 7/8 rewards get paid out to in the blockchain, if this proof wins. This value can be derived from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"launcher_id"),", and must be valid for all partials."),(0,o.kt)("h4",{id:"payloadproof_of_spaceplot_public_key"},"payload.proof_of_space.plot_public_key"),(0,o.kt)("p",null,"Public key associated with the plot. (Can be a 2/2 BLS between plot local key and farmer, but not necessarily)."),(0,o.kt)("h4",{id:"payloadproof_of_spacesize"},"payload.proof_of_space.size"),(0,o.kt)("p",null,"K size, must be at least 32."),(0,o.kt)("h4",{id:"payloadproof_of_spaceproof"},"payload.proof_of_space.proof"),(0,o.kt)("p",null,"64 x values encoding the actual proof of space, must be valid corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sp_hash"),"."),(0,o.kt)("h4",{id:"payloadsp_hash"},"payload.sp_hash"),(0,o.kt)("p",null,"This is either the hash of the output for the signage point, or the challenge_hash for the sub slot, if it's an end\nof sub slot challenge. This must be a valid signage point on the blockchain that has not been reverted. The pool must\ncheck a few minutes after processing the partial, that it has not been reverted on the blockchain."),(0,o.kt)("h4",{id:"payloadend_of_sub_slot"},"payload.end_of_sub_slot"),(0,o.kt)("p",null,"If true, the sp_hash encodes the challenge_hash of the sub slot."),(0,o.kt)("h4",{id:"aggregate_signature"},"aggregate_signature"),(0,o.kt)("p",null,"This is a 2/2 BLS signature of the hashed serialization of the payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sha256(PostPartialPayload)\n")),(0,o.kt)("p",null,"signed by the private keys of the following keys using the Augmented Scheme in the BLS IETF spec:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"plot_public_key")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"authentication_public_key"))),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"streamable")," class ",(0,o.kt)("inlineCode",{parentName:"p"},"PostPartialPayload")," in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/protocols/pool_protocol.py"},"pool protocol")," for details\nand ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("p",null,"A partial must be completely rejected if the BLS signature does not validate."),(0,o.kt)("h2",{id:"get-login"},"GET /login"),(0,o.kt)("p",null,"This allows the user to log in to a web interface if the pool supports it, see service flags in\n",(0,o.kt)("a",{parentName:"p",href:"#get-pool_info"},"GET /pool_info"),". The farmer software must offer a way to generate and display a login link or provide\na button which generates the link and then just opens it in the default browser. The link follows the specification\nbelow."),(0,o.kt)("p",null,"Note that there is no explicit account creation. A farmer can log in after making their self known at the pool with\n",(0,o.kt)("a",{parentName:"p",href:"#post-farmer"},"POST /farmer"),"."),(0,o.kt)("p",null,"Request parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- launcher_id\n- authentication_token\n- signature\n")),(0,o.kt)("p",null,"Example request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://poolurl.com/login?launcher_id=:launcher_id&authentication_token=:token&signature=:signature\n")),(0,o.kt)("h4",{id:"launcher_id-1"},"launcher_id"),(0,o.kt)("p",null,"The unique identifier of the farmer's singleton, see ",(0,o.kt)("a",{parentName:"p",href:"#farmer-identification"},"Farmer identification"),"."),(0,o.kt)("h4",{id:"authentication_token-1"},"authentication_token"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#farmer-authentication"},"Farmer authentication")," for the specification of\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_token"),"."),(0,o.kt)("h4",{id:"signature-2"},"signature"),(0,o.kt)("p",null,"This is a BLS signature of the hashed serialization of the following data in the given order:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Element"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"method_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"launcher_id"),(0,o.kt)("td",{parentName:"tr",align:null},"bytes32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"target_puzzle_hash"),(0,o.kt)("td",{parentName:"tr",align:null},"bytes32")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"authentication_token"),(0,o.kt)("td",{parentName:"tr",align:null},"uint64")))),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"method_name")," must be the serialized string ",(0,o.kt)("inlineCode",{parentName:"p"},'"get_login"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},"target_puzzle_hash"),"\nis pool's target puzzle hash (see ",(0,o.kt)("a",{parentName:"p",href:"#get-pool_info"},"GET /pool_info"),"). The parameters must be serialized and hashed\naccording to ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"Signature validation")," and the signature must be signed by the private key of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_public_key")," using the Augmented Scheme in the BLS IETF spec."),(0,o.kt)("p",null,"where the parameter must be serialized and hashed according to ",(0,o.kt)("a",{parentName:"p",href:"#signature-validation"},"Signature validation")," and the\nsignature must be signed by the private key of the ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_public_key")," using the Augmented Scheme in the BLS\nIETF spec."),(0,o.kt)("h2",{id:"difficulty"},"Difficulty"),(0,o.kt)("p",null,"The difficulty allows the pool operator to control how many partials per day they are receiving from each farmer.\nThe difficulty can be adjusted separately for each farmer. A reasonable target would be 300 partials per day,\nto ensure frequent feedback to the farmer, and low variability.\nA difficulty of 1 results in approximately 10 partials per day per k32 plot. This is the minimum difficulty that\nthe V1 of the protocol supports is 1. However, a pool may set a higher minimum difficulty for efficiency. When\ncalculating whether a proof is high quality enough for being awarded points, the pool should use\n",(0,o.kt)("inlineCode",{parentName:"p"},"sub_slot_iters=37600000000"),".\nIf the farmer submits a proof that is not good enough for the current difficulty, the pool should respond by setting\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"current_difficulty")," in the response."),(0,o.kt)("h2",{id:"points"},"Points"),(0,o.kt)("p",null,"X points are awarded for submitting a partial with difficulty X, which means that points scale linearly with difficulty.\nFor example, 100 TiB of space should yield approximately 10,000 points per day, whether the difficulty is set to\n100 or 200. It should not matter what difficulty is set for a farmer, as long as they are consistently submitting partials.\nThe specification does not require pools to pay out proportionally by points, but the payout scheme should be clear to\nfarmers, and points should be acknowledged and accumulated points returned in the response."))}h.isMDXComponent=!0}}]);