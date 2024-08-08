"use strict";(self.webpackChunkarfleet_docs=self.webpackChunkarfleet_docs||[]).push([[9864],{2558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(4848),i=t(8453);const r={},a="Lifecycle of a Deal",l={id:"learn-arfleet/deal-lifecycle",title:"Lifecycle of a Deal",description:"Here's a high-level view of the lifecycle of an ArFleet deal:",source:"@site/docs/learn-arfleet/20-deal-lifecycle.md",sourceDirName:"learn-arfleet",slug:"/learn-arfleet/deal-lifecycle",permalink:"/docs/learn-arfleet/deal-lifecycle",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learn-arfleet/20-deal-lifecycle.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ArFleet Protocol",permalink:"/docs/learn-arfleet/protocol"},next:{title:"Replica Encryption",permalink:"/docs/learn-arfleet/replica-encryption"}},c={},o=[{value:"Assignments and Placements",id:"assignments-and-placements",level:2},{value:"Marketplace",id:"marketplace",level:2},{value:"Placement States",id:"placement-states",level:2},{value:"Verification Challenges",id:"verification-challenges",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lifecycle-of-a-deal",children:"Lifecycle of a Deal"}),"\n",(0,s.jsx)(n.p,{children:"Here's a high-level view of the lifecycle of an ArFleet deal:"}),"\n",(0,s.jsx)(n.h2,{id:"assignments-and-placements",children:"Assignments and Placements"}),"\n",(0,s.jsxs)(n.p,{children:["When a user of ArFleet client software wants certain data stored, they queue it for storage. This is called a ",(0,s.jsx)(n.strong,{children:"Storage Assignment"}),", a storage job for the client."]}),"\n",(0,s.jsx)(n.p,{children:"Along with the pointer to the data to store, they specify to the client software:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How much they are willing to pay for the storage."}),"\n",(0,s.jsx)(n.li,{children:"The duration of the storage."}),"\n",(0,s.jsx)(n.li,{children:"The redundancy factor they desire for their data to have (meaning how many copies of the data they want to be stored)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It is the client's job to match the storage assignment with providers based on the requirements, provider's availability, provider's capacity, and so on."}),"\n",(0,s.jsxs)(n.p,{children:["When a potential match between an Assignment and Provider is found, this is called a ",(0,s.jsx)(n.strong,{children:"Storage Placement"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The goal is for each Assignment to have ",(0,s.jsx)(n.em,{children:"N"})," successful Placements, where ",(0,s.jsx)(n.em,{children:"N"})," is the redundancy factor of the Assignment."]}),"\n",(0,s.jsx)(n.h2,{id:"marketplace",children:"Marketplace"}),"\n",(0,s.jsxs)(n.p,{children:["Clients have to find providers on the decentralized network. This could be done in a variety of ways; for convenience, ArFleet network designates a global ",(0,s.jsx)(n.em,{children:"ao"})," process called ",(0,s.jsx)(n.strong,{children:"Marketplace"}),", which is used only as a place to discover providers and their services."]}),"\n",(0,s.jsx)(n.p,{children:"Providers use Marketplace to advertise their services to the network."}),"\n",(0,s.jsxs)(n.p,{children:["They can create, update and delete ",(0,s.jsx)(n.strong,{children:"Announcements"}),", which contain, at minimum:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the version of the ArFleet protocol they are using."}),"\n",(0,s.jsx)(n.li,{children:"connection information (Arweave wallet address, acting as the provider's ID, and IP address/port pairs)."}),"\n",(0,s.jsx)(n.li,{children:"the prices they offer for storage."}),"\n",(0,s.jsx)(n.li,{children:"the duration limits placed on new deals."}),"\n",(0,s.jsx)(n.li,{children:"the verification challenge duration limits placed on new deals."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Clients query Marketplace to find providers that meet their storage assignment requirements."}),"\n",(0,s.jsx)(n.p,{children:"It is not a guarantee that such providers are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"online"}),"\n",(0,s.jsx)(n.li,{children:"they still have the capacity to accept new storage assignments"}),"\n",(0,s.jsx)(n.li,{children:"they haven't changed their announcement recently."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, it is the client's responsibility to directly contact the providers to verify their availability and capacity. Once a suitable provider is identified, a placement is initiated and progresses through several stages."}),"\n",(0,s.jsx)(n.h2,{id:"placement-states",children:"Placement States"}),"\n",(0,s.jsxs)(n.p,{children:["The following is an ideal progression of a placement. Throughout this process, error handling is in place. If any step fails, the placement status may change to ",(0,s.jsx)(n.code,{children:"FAILED"})," or ",(0,s.jsx)(n.code,{children:"UNAVAILABLE"}),", depending on the nature of the error (",(0,s.jsx)(n.code,{children:"FAILED"})," meaning something went wrong with the steps, and ",(0,s.jsx)(n.code,{children:"UNAVAILABLE"})," meaning the provider couldn't be reached or stopped responding)."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Creation"}),": A new placement is created with the status ",(0,s.jsx)(n.code,{children:"CREATED"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Initialization"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The client connects to the provider and sends a placement request."}),"\n",(0,s.jsxs)(n.li,{children:["If accepted, the status changes to ",(0,s.jsx)(n.code,{children:"INITIALIZED"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The client starts encrypting the data chunks."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["To find more about the encryption process, see the ",(0,s.jsx)(n.a,{href:"/docs/learn-arfleet/replica-encryption",children:"Replica Encryption"})," section."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Encryption"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"All data chunks are encrypted."}),"\n",(0,s.jsx)(n.li,{children:"A Merkle tree is calculated for the encrypted chunks."}),"\n",(0,s.jsxs)(n.li,{children:["The status changes to ",(0,s.jsx)(n.code,{children:"ENCRYPTED"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Process Spawning"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An ",(0,s.jsx)(n.em,{children:"ao"})," process is created for the deal, based on known Module source code, adjusted for the deal parameters."]}),"\n",(0,s.jsxs)(n.li,{children:["The status changes to ",(0,s.jsx)(n.code,{children:"PROCESS_SPAWNED"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Funding"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The client funds the deal with the required reward."}),"\n",(0,s.jsxs)(n.li,{children:["The status changes to ",(0,s.jsx)(n.code,{children:"FUNDED"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Acceptance"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The provider is notified to accept the funded deal."}),"\n",(0,s.jsxs)(n.li,{children:["If accepted, the status changes to ",(0,s.jsx)(n.code,{children:"ACCEPTED"}),". At this point, the deal is atomically activated from both sides."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Transfer"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Encrypted data chunks are transferred to the provider."}),"\n",(0,s.jsxs)(n.li,{children:["Once all chunks are sent, the status changes to ",(0,s.jsx)(n.code,{children:"TRANSFERRED"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Completion"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The provider is requested to complete the deal setup."}),"\n",(0,s.jsx)(n.li,{children:"The provider sends the required collateral."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.em,{children:"ao"}),' process is verified to be in the "Activated" state.']}),"\n",(0,s.jsxs)(n.li,{children:["If successful, the status changes to ",(0,s.jsx)(n.code,{children:"COMPLETED"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This concludes the placement part, and the verifications start."}),"\n",(0,s.jsx)(n.h2,{id:"verification-challenges",children:"Verification Challenges"}),"\n",(0,s.jsx)(n.p,{children:"After the deal is activated, the provider has to provide verification challenges to the deal process, for the duration of the deal."}),"\n",(0,s.jsx)(n.p,{children:'For each verification challenge, the deal process generates a random bit string of "0"s and "1"s.'}),"\n",(0,s.jsx)(n.p,{children:'This string establishes a Merkle path to the chunk that the provider has to provide for verification. "0" means "go left at this branch" and "1" means "go right at this branch"; this continues until the provider hits a leaf, then the rest of the string is discarded.'}),"\n",(0,s.jsx)(n.p,{children:"The provider has to provide as verification proof:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Merkle path to the chunk (the actual hashes on each level)."}),"\n",(0,s.jsx)(n.li,{children:"The chunk data."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The deal process verifies the path, starting with the root hash which is part of the deal contract, and down until the leaf. If the provided leaf data matches the hash, the challenge is considered as passed."}),"\n",(0,s.jsx)(n.p,{children:"If the verification is unsuccessful, part of the provider's collateral is slashed."}),"\n",(0,s.jsx)(n.p,{children:"If the provider fails to present the proof within the verification period, part of the provider's collateral is slashed."}),"\n",(0,s.jsx)(n.p,{children:"Multiple consecutive failures can result in complete forfeiture of the collateral. This mechanism incentivizes Providers to maintain data integrity and adhere to the agreed-upon storage terms."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["To see why this verification game is effective despite only requiring a small chunk at each verification step, see ",(0,s.jsx)(n.a,{href:"/docs/learn-arfleet/verification-game",children:"Verification Game"})," section."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);