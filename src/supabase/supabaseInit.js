import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient("https://mjdzbecikrpzwezvuibu.supabase.co", 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjE5NDg3MCwiZXhwIjoxOTQxNzcwODcwfQ.5L8-O6q_98EHygSbNafL0OLP8UxGV4zMEADEjWFuslI", {
  localStorage: AsyncStorage,
});
