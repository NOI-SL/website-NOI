<template>
    <div class="container-flud main-section about" id="page-signup-response">
        <section id="section-1">
            <div class="content">
                <div class="container">
                    <div class="mdc-elevation--z2 response-container">
                        <p class="heading-success">You have successfully signed up for the NOI Program</p>
                        <div class="content-message">
                            <p class="thank-you">Thank you!</p>
                            <p class="text">
                                NOI Portal login credentials will be mailed to your email address.<br>
                                Keep in touch with your mail inbox, we will send updates on the program to your inbox.<br>
                                Don't hesitate to send your inquiries through the contact form.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    mounted : () => {
        // scroll to top 
        document.querySelector('#section-1').scrollIntoView(true);
    }
}
</script>
