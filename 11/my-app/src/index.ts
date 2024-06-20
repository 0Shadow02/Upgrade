

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			message:"hi there"
		})
	},
} satisfies ExportedHandler<Env>;
