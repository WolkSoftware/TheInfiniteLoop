"use strict";(self.webpackChunkinfinite_loop_dot_org=self.webpackChunkinfinite_loop_dot_org||[]).push([[4543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:9},r="Scaling the infinite loop",l={unversionedId:"the-infinite-loop/scaling",id:"the-infinite-loop/scaling",title:"Scaling the infinite loop",description:"This section will look at strategies that can help organisations scale their operations under the L\u221eP framework.",source:"@site/guide/02-the-infinite-loop/10-scaling.md",sourceDirName:"02-the-infinite-loop",slug:"/the-infinite-loop/scaling",permalink:"/guide/the-infinite-loop/scaling",draft:!1,editUrl:"https://github.com/WolkSoftware/TheInfiniteLoop/tree/main/guide/02-the-infinite-loop/10-scaling.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"L\u221eP and the future of work",permalink:"/guide/the-infinite-loop/the-future-of-work"},next:{title:"Other resources",permalink:"/guide/category/other-resources"}},s={},p=[{value:"Multiple product teams",id:"multiple-product-teams",level:2},{value:"Loop of Loops (LoL)",id:"loop-of-loops-lol",level:2},{value:"Platform engineering",id:"platform-engineering",level:2},{value:"InnerSource",id:"innersource",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scaling-the-infinite-loop"},"Scaling the infinite loop"),(0,o.kt)("p",null,"This section will look at strategies that can help organisations scale their operations under the L\u221eP framework."),(0,o.kt)("h2",{id:"multiple-product-teams"},"Multiple product teams"),(0,o.kt)("p",null,"You can create multiple product teams with different focuses. The following list details some of the most common strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User personas"),": Create one team for each UX persona. For example, you can have one team focused on making the product great for startups while you have another focused on helping large multinationals.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Subsets of features"),": If your product has different modules, this could be a promising approach for your organisation. For example, imagine that you are developing an end-to-end CRM solution. You could have a module for customer support and another for sales or marketing. You could have one product team for each of the modules.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Stages"),": The stages here refer to phases in a customer's lifetime. Different product teams could focus on each of the following stages:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Acquisition"),": This step is dedicated to attracting and acquiring new customers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Activation"),": This step is dedicated to converting newly acquired customers into engaged and loyal ones.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Retention"),": This step is dedicated to keeping its existing customers satisfied and engaged so that they continue to do business with the company over a long time."))))),(0,o.kt)("h2",{id:"loop-of-loops-lol"},"Loop of Loops (LoL)"),(0,o.kt)("p",null,"Loop of Loops (LoL) can be used to coordinate and manage the dependencies between multiple Infinite Loop teams working on a large, complex project. It is a way to scale the Infinite Loop beyond a single team to handle the communication, coordination, and integration challenges that arise when multiple teams work together. The Loop of Loops typically involves the PMs from each Infinite Loop team meeting regularly to discuss and resolve cross-team dependencies."),(0,o.kt)("p",null,"In this approach, the PMs communicate what their teams are working on, what they need from other teams, and what roadblocks they are facing. This helps to ensure that all teams are aligned on the project goals and are making progress towards the same end goal. The Loop of Loops also acts as a forum for cross-team coordination and problem-solving. For example, if one team is blocked on a certain aspect of the project, they can bring the issue to the Loop of Loops meeting to find a solution with the help of other teams. The Loop of Loops is also a place for sharing information and updates, such as customer insights and changes in priorities."),(0,o.kt)("h2",{id:"platform-engineering"},"Platform engineering"),(0,o.kt)("p",null,"A platform engineering team is a group of software engineers, developers, and other technical experts who are responsible for building and maintaining the technical infrastructure that supports the development and deployment of software applications. The primary goal of a platform engineering team is to create a stable, scalable, and efficient platform that enables other teams within an organisation to build and deploy applications quickly and reliably."),(0,o.kt)("p",null,"A well-functioning platform engineering team can bring several benefits to an organisation, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Increased efficiency"),": A platform engineering team can streamline the software development process by providing a stable, scalable, and efficient infrastructure for building and deploying applications. This can help reduce development time and improve the overall efficiency of the software development lifecycle.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Increased innovation"),": By providing a solid foundation for software development, a platform engineering team can free up other teams to focus on innovation and new initiatives, which can help an organisation stay ahead of the curve and maintain a competitive edge.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Improved reliability"),": By implementing best practices for platform design, maintenance, and operations, a platform engineering team can ensure the reliability and stability of the platform and reduce downtime for applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Enhanced security"),": A platform engineering team can implement robust security measures to protect sensitive data and prevent security breaches, which can help protect the reputation and credibility of the organisation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scalability"),": A well-designed platform can be scaled easily to accommodate the changing needs of the organisation, which can help the organisation stay ahead of the curve as it grows and expands."))),(0,o.kt)("p",null,"The scope of a platform engineering team's responsibilities may vary depending on the size and needs of an organisation. Some common tasks and responsibilities of a platform engineering team include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Designing and implementing a scalable and highly available infrastructure for hosting applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Building and maintaining a continuous integration and deployment (CI/CD) pipeline for software development.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Developing and managing platform services, such as databases, caching systems, and messaging queues, to support the needs of applications.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Implementing security measures, such as authentication, authorisation, and encryption, to ensure the confidentiality and integrity of data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Monitoring and optimising the performance of the platform and applications running on it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Providing support and guidance to other teams that are building applications on the platform."))),(0,o.kt)("h2",{id:"innersource"},"InnerSource"),(0,o.kt)("p",null,"InnerSource is a growing trend in high-performing engineering teams that adopt open-source processes to work and collaborate more effectively. When teams use InnerSource, they develop proprietary software and open up the work internally between teams so that everyone \u2014 from developers to product managers \u2014 can contribute to the source code."),(0,o.kt)("p",null,"InnerSource is a software development strategy that applies open-source practices to proprietary code. InnerSource can help establish an open-source culture within an organization while retaining software for internal use. Teams use InnerSource to increase visibility, strengthen collaboration, and break down silos."),(0,o.kt)("p",null,"By setting the default to open for internal projects within an organization, teams can reuse existing solutions, minimize redundancy, empower team collaboration, and leverage talent across the workforce."),(0,o.kt)("p",null,"In large organizations and companies, development teams are often spread across different departments or time zones. Multiple developers may never meet or have access to the same departmental strategies. Innersource can help create a learning culture and encourage developers to collaborate across teams and departments, leading to more efficient communication and knowledge sharing."))}u.isMDXComponent=!0}}]);