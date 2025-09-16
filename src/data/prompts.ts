// 1. A single import for all your images!
import images from "@/assets/images";

export interface Prompt {
  id: string;
  title: string;
  prompt: string;
  imageUrl: string;
  category: string;
  tags: string[];
  model: string;
  aspectRatio: string;
}

export const promptCategories = ["All", "Male", "Female"];

export const samplePrompts: Prompt[] = [
  {
    id: "1",
    title: "Retro Vintage Book Lover",
    prompt: "Create a retro vintage grainy light but bright image of the reference picture but draped in a perfect blue wine color Pinteresty aesthetic retro shirt with white pant and holding a book in one hand. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective take the face reference from image.",
    imageUrl: images["retro_vintage_book_lover.png"],
    category: "Male",
    tags: ["retro", "vintage", "90s movie", "book lover", "moody", "golden hour", "male fashion"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "2",
    title: "Relaxed Authority Portrait",
    prompt: "Hands in Pockets - Relaxed Authority A hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). He stands tall in a dark moody studio, surrounded by soft drifting smoke under a dramatic spotlight. Outfit: Oversized slate-blue uxury suit with wide-leg trousers s, palred with slightly unbuttoned white silk shirt. Both hands tucked casually in pockets, shoulders relaxed, confident expression, head tilted slightly to left.",
    imageUrl: images["relaxed_authority_portrait.png"],
    category: "Male",
    tags: ["portrait", "cinematic", "editorial", "luxury suit", "relaxed", "confident", "dark studio", "spotlight"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "3",
    title: "Golden Hour",
    prompt: "Create a softly lit portrait of the uploaded person standing indoors near a window with warm sunlight streaming through. Use a cinematic, golden-hour lighting style that highlights the face and hair with natural glow and soft shadows. The person should be wearing a loose, casual white shirt with slightly rolled-up sleeves. The mood should feel calm, dreamy, and natural, with soft depth of field and a warm, intimate atmosphere take reference from the image.",
    imageUrl: images['lightsofty.png'],
    category: "Male",
    tags: ["minimalist", "pastel", "clean", "modern"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "4",
    title: "Retro Romance",
    prompt: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect red wine color Pinteresty aesthetic retro shirt with white pant and holding a rose flower in hands. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective, take the reference face from the picture.",
    imageUrl: images["retro.png"],
    category: "Male",
    tags: ["retro", "vintage", "90s movie", "romantic", "portrait", "red shirt", "rose", "moody", "calm", "minimalist background", "deep shadows", "contrast drama"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "5",
    title: "Retro Sunset Saree",
    prompt: "In a perfect plain chiffon saree red color Pinterest aesthetic retro saree. It must feel like a 90s movie dark brown wavy curly hair with a small flower tucked visibly into her curls and romanticising windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is 0.7K moody, calm yet happy and introspective",
    imageUrl: images["retro_sunset_saree.png"],
    category: "Female",
    tags: ["retro saree", "90s movie aesthetic", "golden hour", "chiffon saree", "moody portrait"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "6",
    title: "Mysterious Saree",
    prompt: "Create a retro, vintage-inspired image grainy yet bright based on the reference picture. The girl should be draped in a perfect blue cotton saree with small white flower prints, paired with a white blouse with sleeves above the elbow, styled in a Pinterest-inspired aesthetic. The vibe must capture the essence of a 90s movie dark-brown-hairedbaddie, with silky hair and a small flower tucked visibly into her hair, enhanced by a windy, romantic atmosphere. She is sitting on a wooden bench as a few leaves blovw in the air, while dramatic contrastsadd mystery and artistry to the scene, creating amoody yet enchanting cinematic effect. effect. Her pose should suggest that she is readinga book.",
    imageUrl: images["moody_saree_reading.png"],
    category: "Female",
    tags: ["retro", "vintage", "saree", "90s movie", "moody", "cinematic", "reading"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "7",
    title: "Retro Royal Blue Saree",
    prompt: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect an elegant royal blue silk saree with golden motifs and a golden border, in Pinteresty aesthetic retro saree. It must feel like a 90s movie brown hair baddie with a small flower tucked visibly into her curls and romanticising windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm witha golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
    imageUrl: images["retro_saree_portrait.png"],
    category: "Female",
    tags: ["retro", "saree", "vintage", "royal blue", "golden hour", "90s fashion", "moody portrait", "ethnic wear", "pinterest aesthetic"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "8",
    title: "Retro 90s Saree Vibe",
    prompt: "Create a retro, vintage-inspired image grainy yet bright - based on the reference picture. The girl should be draped in a perfect plain purple saree paired with a black sleeveless blouse on it, Pinterest style aesthetic saree. The vibe must capture the essence of a 90s movie dark brown -haired baddie, with silky hair and a small flower tucked visibly into her hair enhanced by a windy, romantic atmosphere. She stands against a old wooden door, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody7K yet enchanting cinematic effect. Make a pose like she is adjusting her saree.",
    imageUrl: images["sam_saree_vibe.png"],
    category: "Female",
    tags: ["retro", "vintage", "90s fashion", "saree", "moody cinematic", "dark academia"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "9",
    title: "Retro Saree Sunset",
    prompt: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect black color Pinterest's aesthetic retro saree. It must feel like a 90s movie brown hair baddie with a small flower tucked visibly into her curls and romanticizing windy environment. The girl is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on her sterk face is moody, calm yet happy and introspective.",
    imageUrl: images["retro_saree_sunset.png"],
    category: "Female",
    tags: ["retro", "vintage", "saree", "90s movie", "golden hour", "moody", "introspective", "fashion", "black saree"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "10",
    title: "Bollywood Rain Romance",
    prompt: "A cinematic 90s Bollywood-style photo of a beautiful woman standing in the rain, holding an umbrella. She is wearing an off-white and blue open pallu wet saree that drapes elegantly over her figure, looking graceful and confident. Her short wavy curly wet hair falls naturally across her face, creating a romantic and dramatic vibe, soft golden streetlight glow, cinematic rain, dramatic expression, romantic atmosphere.",
    imageUrl: images["bollywood_rain_romance.png"],
    category: "Female",
    tags: ["Bollywood", "90s style", "rain", "saree", "romantic", "cinematic", "dramatic"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "11",
    title: "Dreaming in Flower Field",
    prompt: "Dreaming in flower field\nPrompt-Create me sitting in a blooming field of White flower, smiling warmly and looking to the side. She is wearing, flowy white dress.\nHer dark hair is tied back loosely with a few strands falling naturally. A small flower is tucked near her ear, adding to the soft, dreamy glow. The atmosphere is serene, romantic, and joyful, capturing the essence of a carefree summer day.",
    imageUrl: images["dreaming_in_flower_field.png"],
    category: "Female",
    tags: ["flower field", "white dress", "summer", "serene", "romantic", "joyful"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "12",
    title: "Golden Hour Laughter",
    prompt: "Hyper-realistic overhead 9:16 close-up of myself with glasses, playfully leaning against an ivy-covered stone wall of an old countryside cottage during golden hour. I'm laughing with my head slightly tilted down, one hand brushing away a dangling vine, The flowering vines are in full bloom with orange, magenta, and lavender hues, softly blurred in the foreground.",
    imageUrl: images["paper_flowers_cottage_portrait.png"],
    category: "Female",
    tags: ["portrait", "golden hour", "countryside", "flowers", "laughing", "glasses"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "13",
    title: "Black and White Fine Art Portrait",
    prompt: "Black and white fine art portrait of a young woman, short wavy slightly messy hair framing her delicate face, smooth fair skin, wearing an oversized white shirt. Pose: sitting with one hand resting gently under her chin, looking at the camera with a calm and thoughtful expression. Studio setting with plain grey backdrop, soft cinematic lighting, minimalistic composition. Ultra realistic, sharp facial details, natural textures, elegant and sophisticated style. Professional photography, 8K quality",
    imageUrl: images["black_white_fine_art_portrait.png"],
    category: "Female",
    tags: ["black and white", "fine art", "portrait", "young woman", "short hair", "oversized shirt", "studio", "cinematic lighting", "minimalistic", "ultra realistic"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "14",
    title: "Timeless Serenity",
    prompt: "4K HD realistic, A stunning portrait of a young Indian woman with short, wavy black hair. She is seated on an old Indian-style wooden bench with carved details, her body angled slightly to the side so that her gentle side profile is visible. She is wearing a maroon cotton saree with minimal Indian print, draped simply and elegantly. She is holding and reading a book, deeply immersed, with a calm and thoughtful expression. The face must remain 100% identical to the uploaded photo without any alteration. The background is a peaceful garden with soft greenery, dappled sunlight filtering through the trees, and a natural, serene atmosphere. The overall mood is retro, artistic, and nostalgic, evoking timeless vintage charm.",
    imageUrl: images["serenity_portrait.png"],
    category: "Female",
    tags: ["Indian woman", "saree", "reading a book", "garden", "retro", "vintage", "portrait"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "15",
    title: "Black and White Studio Portrait",
    prompt: "Use the model to create a black-and-white studio photo, featuring a young man sitting casually on a metal folding chair with his legs crossed. He is wearing a denim jacket, a dark t-shirt, straight jeans, and black boots. The lighting is soft and minimal, producing sharp shadows and a moody atmosphere. His body pose is relaxed, slightly leaning back with one hand on the chair's armrest, his face turned to the side. The background is plain, with a simple and modern aesthetic.",
    imageUrl: images["black_and_white_studio_portrait.png"],
    category: "Male",
    tags: ["black and white", "studio photo", "young man", "denim jacket", "casual", "moody"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "16",
    title: "Embracing the Wind",
    prompt: "A cinematic, moody photograph of a young man standing in a lush green field of tall grass under a cloudy, overcast sky. He is wearing a loose, dark button-up shirt and dark trousers. His posture is expressive and dramatic, leaning slightly backward with one arm outstretched and palm open, as if embracing the wind or the moment. His head is tilted back, eyes closed, and he is wearing large, over-ear silver headphones, giving a sense of calm and emotional release. The perspective is slightly low-a use reference picture face.",
    imageUrl: images["embracing_the_wind.png"],
    category: "Male",
    tags: ["cinematic", "moody", "field", "headphones", "emotional release", "nature"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "17",
    title: "Introspective Shadows",
    prompt: "A black-and-white aesthetic portrait of a stylish me(use my image with accurate face 100%) sitting on the floor in dramatic lighting. He is wearing an oversized dark coat. His pose is emotional and introspective, with one hand near his mouth and his head slightly turned to the side. Shadows from a window fall across the wall behind him, creating a moody and artistic atmosphere. The overall vibe is mysterious, emotional, and cinematic.",
    imageUrl: images["introspective_shadows.png"],
    category: "Male",
    tags: ["black-and-white", "portrait", "dramatic lighting", "oversized coat", "emotional", "introspective", "shadows", "moody", "cinematic", "stylish"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "18",
    title: "Stylish Indian Man Lounging",
    prompt: "A hyper-realistic cinematic lifestyle portrait of a stylish young Indian man lounging confidently on a modern hanging wicker chair. He is dressed in a trendy all-white-ord set with a casual T-shirt and open shirt, paired with colorful designer sneakers and a luxury wristwatch. His expression is cool and composed as he slightly leans back with a relaxed posture, wearing dark sunglasses that add charisma to his look. The setting is a minimal outdoor terrace with subtle decor, soft natural daylight, and a clean modern vibe. Captured in ultra-detailed 8K resolution with sharp textures, natural skin tones, realistic shadows, and a premium fashion editorial aesthetic.",
    imageUrl: images["stylish_indian_man_portrait.png"],
    category: "Male",
    tags: ["indian man", "lifestyle", "fashion", "portrait", "wicker chair", "white outfit", "sunglasses", "outdoor", "modern", "cinematic"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "19",
    title: "Golden Sunset Portrait",
    prompt: "Moody studio portrait of the upload person, bathed in golden-orange spotlight that create glowing circular halo behind Them on the wall. The warm light should sculpt the face and upper body with soft, sunset-like tones, while casting a strong head shadow to the right. Style the person. Her eye are closed and chin tilted slightly up.",
    imageUrl: images["ntr_sunset_portrait.png"],
    category: "Male",
    tags: ["moody", "portrait", "golden light", "studio", "halo", "sunset tones", "shadow", "meditative"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "20",
    title: "Stylish City Night Flash",
    prompt: "A vertical 9:16 high-resolution 8K vintage-style flash photograph of a stylish white man standing confidently on a nighttime city street, captured with dramatic fisheye lens distortion. The image includes subtle grain, light film scratches, and analog texture effects for a nostalgic yet editorial feel. He wears an abstract red shirt with bold, expressive artistic patterns, partially unbuttoned to reveal his confident, edgy demeanor. Chunky metallic jewelry and fashionable sunglasses add to his striking streetwear aesthetic. The city backdrop is softly transformed by cozy home party vibes red ambient lighting, delicate string lights hanging above, and a warm, intimate atmosphere that blends festivity with the urban night setting. Skin texture is flawless, lighting is dramatic with soft shadows and lens flash reflections. No distortions, no anatomical flaws. Image must be generated entirely based on the uploaded photo, maintaining all the characteristics of the main character.",
    imageUrl: images["ntr_stylish_city_night_flash.png"],
    category: "Male",
    tags: ["vintage", "flash photography", "fisheye", "streetwear", "nightlife", "party vibes", "red shirt", "sunglasses", "jewelry", "urban"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "21",
    title: "Cafe Elegance",
    prompt: "Use the attached image of the person as the sole facial and hairstyle reference. Keep the exact same face, hairstyle, and overall appearance as in the reference image, maintaining a realistic and natural look. High-fashion lifestyle editorial portrait of a 20-year-old Indian man, elegant and sophisticated, sitting on a wooden chair in a modern cafe. He holds a white coffee cup in both hands in a refined gesture, exuding confidence and charm. Outfit: a structured white shirt with a white blazer casually thrown over the shoulders, combined with wide-cut jeans. Accessories: rectangular sunglasses with gold details, a luxury gold watch, and a bold statement ring. Skin: natural, youthful, glowing with soft highlight. Background: elegant cafe environment, blurred in the background to emphasize the subject. Lighting: soft, warm natural light illuminates the face and reflects off the gold accessories to create a luxurious glow. Pose: body slightly leaning forward.",
    imageUrl: images["ntr_cafe_elegance_portrait.png"],
    category: "Male",
    tags: ["high-fashion", "lifestyle", "editorial", "portrait", "Indian man", "cafe", "sophisticated", "elegant", "white blazer", "jeans", "sunglasses", "luxury watch", "statement ring", "natural light"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "22",
    title: "Cool Young Man",
    prompt: "Create a cool young man from this uploaded photo, wavy, vintage hair, is clean-cut, and is wearing a white t-shirt and light-colored jeans. he's sitting comfortably on a wooden crate. he's looking to the right, holding a denim jacket The background has a smoke blue & red effect and a bright black studio scene, maintain same face.",
    imageUrl: images["ntr_hold_pant_cool_young_man.png"],
    category: "Male",
    tags: ["young man", "vintage hair", "clean-cut", "white t-shirt", "light jeans", "denim jacket", "wooden crate", "smoke effect", "studio scene"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "23",
    title: "Creative Thought",
    prompt: "Fine black and white photography of a handsome young man (take reference face as uploaded image face)with dark, his head tilted back in a moment of intense creative thought or ecstasy. He is wearing an open, loose white collared shirt, standing in a dimly lit study filled with stacks of books and papers. The image is captured with a slow shutter speed, creating dramatic horizontal motion blur that streaks the background and the edges of his form.",
    imageUrl: images["creative_thought.png"],
    category: "Male",
    tags: ["black and white", "creative", "thoughtful", "motion blur", "study", "books", "male portrait"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "24",
    title: "Elegant Indian Woman in Red Saree",
    prompt: "Convert, 4k HD realistic, A stunning portrait of a young Indian woman with long, dark, nice beautiful stylish hairstyle cascading over her shoulders. She is wearing a elegant red saree draped over one shoulder, revealing a fitted blouse. White flowers are tucked behind her right ear. She is looking slightly to her right, with a soft, serene expression. I want same face as I uploaded no alternation 100 percent same. The background is a plain, warm-toned wall, illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of her profile and hair on the wall behind her. The overall mood is retro and artistic.",
    imageUrl: images["elegant_indian_woman.png"],
    category: "Female",
    tags: ["Indian woman", "saree", "portrait", "retro", "artistic", "traditional", "flowers"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "25",
    title: "Retro Vintage Moody Portrait",
    prompt: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect gray color Pinteresty aesthetic retro shirt with brown pant and holding a pen in hand. It must feel like a 90s movie and windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a black and white tones of evoking a sunset or white smoky glow. The background is minimalist and slightly textured the expression on her face is moody, calm yet happy and introspective.",
    imageUrl: images["retro_moody_portrait.png"],
    category: "Male",
    tags: ["retro", "vintage", "90s movie", "moody", "pen", "grainy", "black and white", "deep shadows", "minimalist background", "calm expression"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "26",
    title: "Retro 90s Baddie",
    prompt: "Create a retro, vintage-inspired image - grainy yet bright -based on the reference picture. The boy should be wearing in a white shirt with small brown flower prints, paired with plated beige pant styled in a Pinterest-inspired aesthetic. The vibe must capture the essence of a 90s movie dark-brown-haired baddie, hair waving by a windy, romantic atmosphere. He is sitting on a wooden bench as a few leaves blow in the air, while dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting",
    imageUrl: images["retro_baddie.png"],
    category: "Male",
    tags: ["retro", "vintage", "90s fashion", "moody", "romantic", "masculine"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "27",
    title: "Elevator Style",
    prompt: "Full-body portrait of a young man standing in a sleek, modern elevator. He is wearing an oversized black suit with wide lapels, no visible shirt underneath, and holding a takeaway coffee cup in one hand. He is wearing large black sunglasses and match the hairs as uploaded in the image above. keep the face unchanged, The elevator interior has brushed metal walls, soft overhead lighting, and a minimalistic, urban vibe. The mood should be cinematic, high-fashion editorial, and slightly moody. Capture a clean, polished look with subtle shadows and professional-grade lighting, emphasizing luxury and confidence(take face reference from image.)",
    imageUrl: images["elevator_style_portrait.png"],
    category: "Male",
    tags: ["fashion", "menswear", "suit", "elevator", "modern", "cinematic", "high-fashion", "moody", "luxury", "confidence"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
  {
    id: "28",
    title: "Elegant Indian Woman in Red Saree",
    prompt: "Convert, 4k HD realistic, A stunning portrait of a young Indian woman with long, dark, nice beautiful stylish hairstyle cascading over her shoulders. She is wearing a elegant red saree draped over one shoulder, revealing a fitted blouse. White flowers are tucked behind her right ear. She is looking slightly to her right, with a soft, serene expression. I want same face as I uploaded no alternation 100 percent same. The background is a plain, warm-toned wall, illuminated by a warm light source from the right, creating a distinct, soft-edged shadow of her profile and hair on the wall behind her. The overall mood is retro and artistic.",
    imageUrl: images["elegant_indian_woman.png"],
    category: "Female",
    tags: ["Indian woman", "saree", "portrait", "retro", "artistic", "traditional", "flowers"],
    model: "Gemini",
    aspectRatio: "2:3"
  },
];