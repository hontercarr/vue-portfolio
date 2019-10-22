<template>
    <div class="contact">
        <v-card class="contactCard" outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Email</v-list-item-title>
                    <v-list-item-subtitle>
                        Email me anytime at
                        <a
                            href="mailto:hontercarr@gmail.com"
                        >hontercarr@gmail.com</a>.
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Twitter</v-list-item-title>
                    <v-list-item-subtitle>
                        I also have a twitter, DM me if you have any questions.
                        <a
                            href="https://twitter.com/hontercarr"
                        >@hontercarr</a>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">Reddit</v-list-item-title>
                    <v-list-item-subtitle>
                        I spend most of the time I spend on social media on Reddit.
                        <a
                            href="https://reddit.com//u/young-sinatra-"
                        >/u/young-sinatra-</a>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style scoped>
.contactCard {
    align-content: center;
    text-align: left;
    margin: 5%;
}

.contactIcon {
    margin: 5%;
    padding-top: 0px;
}

a {
    color: #3b3b3b !important;
    text-decoration: none;
}
</style>