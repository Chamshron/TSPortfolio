import React from "react";
import{
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormEmailProps = {
    senderMessage: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    senderMessage,
    senderEmail,
}: ContactFormEmailProps) {
    return(
        <Html>
            <Head />
                <Preview>New Message from your portfolio website</Preview>
                <Tailwind>
                    <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">
                            You received the following message from the contact form
                        </Heading>
                        <Text>{senderMessage}</Text>
                        <Hr />
                        <Text>The {`sender's`} email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                    </Body>
                </Tailwind>
        </Html>
    );
}