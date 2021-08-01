(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={item:"ImageGalleryItem_item__15FLA",image:"ImageGalleryItem_image__2qUEn"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__1CU2w",modal:"Modal_modal__1c3BH"}},15:function(e,t,a){e.exports={container:"Loader_container__2robk"}},16:function(e,t,a){e.exports={gallery:"imageGallery_gallery__jxA9L"}},17:function(e,t,a){e.exports={button:"Button_button__Jf599"}},18:function(e,t,a){e.exports={container:"App_container__XpdaT"}},24:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),c=a.n(r),s=(a(23),a(24),a(12)),i=a(3),l=a(4),u=a(6),h=a(5),m=a(7),d=a.n(m),b=a(0),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:""},e.handleChangeInput=function(t){e.setState({searchQuery:t.target.value.toLowerCase()})},e.handleSubmitForm=function(t){t.preventDefault();var a=e.state.searchQuery,n=e.props.onSubmit;""!==a.trim()&&(n(a),e.reset())},e.reset=function(){e.setState({searchQuery:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:d.a.searchbar,children:Object(b.jsxs)("form",{className:d.a.searchForm,onSubmit:this.handleSubmitForm,children:[Object(b.jsx)("button",{type:"submit",className:d.a.button,children:Object(b.jsx)("span",{className:"label"})}),Object(b.jsx)("input",{className:d.a.input,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeInput})]})})}}]),a}(n.Component),p=a(14),j=a.n(p),f=(a(46),a(15)),y=a.n(f),O=function(){return Object(b.jsx)("div",{className:y.a.container,children:Object(b.jsx)(j.a,{type:"BallTriangle",color:"#3f51b5",height:80,width:80,timeout:3e3})})},_=a(13),v=a(10),x=a.n(v),w=function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,o=e.tags,r=e.onClick;return Object(b.jsx)("li",{className:x.a.item,children:Object(b.jsx)("img",{src:a,"data-source":n,alt:o,className:x.a.image,onClick:function(e){return r(e.currentTarget)}})},t)},S=a(16),k=a.n(S),C=function(e){var t=e.images,a=e.onClick;return Object(b.jsx)("ul",{className:k.a.gallery,children:t.length>0&&t.map((function(e){return w(Object(_.a)(Object(_.a)({},e),{},{onClick:a}))}))})},M=a(17),I=a.n(M),N=function(e){var t=e.onLoadMore;return Object(b.jsx)("button",{type:"button",className:I.a.button,onClick:function(){return t()},children:"Load more"})},B=a(11),L=a.n(B),Q=document.querySelector("#modal-root"),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).hendleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.hendleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDown)}},{key:"render",value:function(){var e=this.props.imageModal;return Object(r.createPortal)(Object(b.jsx)("div",{className:L.a.overlay,onClick:this.hendleBackdropClick,children:Object(b.jsxs)("div",{className:L.a.modal,children:[Object(b.jsx)("img",{src:e.dataset.source,alt:e.alt})," "]})}),Q)}}]),a}(n.Component);var F={fetchImages:function(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("22026737-4ace7165bbd581938b49ded93","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))}},A=a(18),D=a.n(A),T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchQuery:"",page:1,images:[],loading:!1,showButtom:!1,showModal:!1,imageModal:"",error:null},e.getImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),setTimeout((function(){F.fetchImages(a,n).then((function(t){var a=t.hits;0===a.length&&e.setState({error:"Sorry, search returned no results. Enter correct query."}),12!==a.length?e.setState({showButtom:!1}):e.setState({showButtom:!0}),e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),page:e.page+1}})),e.smoothScroll()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))}),1e3)},e.smoothScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.hendleSubmit=function(t){e.setState({searchQuery:t,images:[],page:1,error:""})},e.toggelModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.hendleOnImageClick=function(t){e.setState({imageModal:t}),e.toggelModal()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.searchQuery!==t.searchQuery&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,n=e.showButtom,o=e.showModal,r=e.imageModal,c=e.error;return Object(b.jsxs)("div",{className:D.a.container,children:[Object(b.jsx)(g,{onSubmit:this.hendleSubmit}),a&&Object(b.jsx)(O,{}),c&&Object(b.jsx)("p",{children:c}),Object(b.jsx)(C,{images:t,onClick:this.hendleOnImageClick}),n&&Object(b.jsx)(N,{onLoadMore:this.getImages}),o&&Object(b.jsx)(E,{imageModal:r,onClose:this.toggelModal})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__37otY",searchForm:"Searchbar_searchForm__19lp5",button:"Searchbar_button__2WRee",label:"Searchbar_label__310YR",input:"Searchbar_input__BxtW2"}}},[[47,1,2]]]);
//# sourceMappingURL=main.fd52c09e.chunk.js.map