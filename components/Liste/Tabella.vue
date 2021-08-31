<template>
	<div class="marginAutoCenter" >
		<div v-for="tab in tabella" :key="tab.id" class="marginAutoCenter">
			<div class="singleTabPC2">
				<div class="singleTabPC marginAutoCenter">
					<h1>{{tab.text}}</h1>
					<div   class="marginAutoCenter tableContainerPC" >
						<table class="tabPC marginAutoCenter">
							<tr>
								<th v-for="colInt in tab.intestazione" :key="colInt" class="thPC">
									<h3>
										{{colInt}}
									</h3>
								</th>
							</tr>
							<tr v-for="riga in tab.righe" :key="riga.id">
								<td v-for="cella in riga.celle" :key="cella.id" class="tdPC">
									<div>
										<div v-if="cella.type=='text'">
											<p v-for="testo in cella.text" :key="testo" class="pTextPC">
												{{testo}}
											</p>
										</div>
											<div v-if="cella.type=='list'">
												<ul style="padding-left:1rem; margin-bottom:0px;">
											<li v-for="testo in cella.text" :key="testo" class="pTextPC" style="padding-top:0.1rem;padding: bottom 0.1rem;">
												{{testo}}
											</li>
												</ul>
										</div>
										<div v-if="cella.type=='link'">
											<a v-for="testo in cella.text" :key="testo" class="pTextPC" :href="testo">
												{{testo}}
											</a>
										</div>
									</div>
								</td>
							</tr>
						</table>
					</div>
					<div style="padding:1rem;"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    tabella: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.tabPC{

}

.tableContainerPC{
	padding:0.5rem; 
	max-width:calc(35rem + 47vw);
}

.pTextPC{
	margin-bottom: 0.01rem;
}

.singleTabPC2{
	margin-top: 0.5rem;
margin-bottom: 0.5rem;
margin-left: calc(0.15rem + 2vw);
margin-right: calc(0.15rem + 2vw);
}

.singleTabPC{
	border: solid 1px #00000021;
border-radius: 1.5rem;
padding: 0.01rem;
}

.thPC{
border:1px solid rgba(0, 0, 0, 0.699);
text-align: center;
padding:0.25rem;
}

.tdPC{
border:1px solid rgba(0, 0, 0, 0.781);
text-align: left;
padding:0.35rem;
min-width: calc(8vw + 6rem);
}

.marginAutoCenter{
	margin: auto;
text-align: center;
overflow: auto;
}
</style>