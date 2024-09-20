import { List, ListItem, Stack, Typography } from '../../common/components';

export function ContactPage() {
  return (
    <Stack
      width={0.75}
      paddingLeft={10}
      paddingRight={10}
      paddingBottom={8}
      spacing={2}
    >
      <Typography variant="h2">Contact Us</Typography>
      <Typography>
        Have a question or need assistance? Feel free to contact us.
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h3">Contact Information</Typography>
        <List>
          <ListItem>
            <strong>Phone:</strong> +880 1234567890, +880 9876543210
          </ListItem>
          <ListItem>
            <strong>Email:</strong> support@simpleecommerce.com
          </ListItem>
          <ListItem>
            <strong>Address:</strong> 123, Main Street, Dhaka, Bangladesh
          </ListItem>
        </List>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h3">Location</Typography>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0356902973303!2d90.40119277621933!3d23.75698709770697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e83833486f%3A0x636a3781b2f7363a!2sSimple%20E-commerce!5e0!3m2!1sen!2sbd!4v1695263146797!5m2!1sen!2sbd"
          width="100%"
          height="400"
          allowFullScreen
        ></iframe>
      </Stack>
    </Stack>
  );
}
