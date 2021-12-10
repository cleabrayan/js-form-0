const select = (slct) => {
    return document.querySelector(slct);
};
let formtatus = false;


select('#email_fld').addEventListener('keyup', () => {
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,7}$/;
            const email = select('#email_fld').value;
            if (email == "" ){
                select('.frm_login').classList.remove('invalid');
                select('.frm_login').classList.remove('valid');
                formtatus = false; 
                } else {
                    if (email.match(pattern)) {
                        select('.frm_login').classList.add('valid');
                        select('.frm_login').classList.remove('invalid');
                        formtatus = true;
                    } else {
                        select('.frm_login').classList.add('invalid');
                        select('.frm_login').classList.remove('valid');
                        formtatus = false;
                    }
           }
});

select('.btn-submit').addEventListener('click', e => {
         e.preventDefault();
         if (formtatus) {
             select('.frm_login').submit();
         }
})